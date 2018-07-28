import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    const { name, age, height } = this.state
    axios.post('http://localhost:3333/smurfs', { name, age, height })
    .then((response) => this.setState({ name: '', age: '', height: ''}))
    .catch(error => console.log(`${error}`))
  }



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

 


  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
        <Link to={`/`}>Home</Link>
      </div>
    );
  }
}

export default SmurfForm;
