import React, { Component } from 'react';
import axios from "axios" 

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = event => {
    event.preventDefault();

    const{name,age,height}=this.state;
    const newSmurfs={name,age,height}

    axios 
    .post('http://localhost:3333/smurfs', newSmurfs)
    .then(response => {
      this.props.updateSmurfs(response.data);
    })
    .catch(err => {
      console.log('ERR', err);
    });
  }

  

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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
