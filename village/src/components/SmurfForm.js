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
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    
    axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then((res) => {
        this.props.updateInfo();
      })
      .catch(err => console.log(err))

      this.setState({
        name: '',
        age: '',
        height: ''
      });
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
          <button onClick={this.addSmurf} type="submit">Add to the village</button>
        </form>
        <Link to="/smurfs">See all Smurfs</Link>
      </div>
    );
  }
}

export default SmurfForm;
