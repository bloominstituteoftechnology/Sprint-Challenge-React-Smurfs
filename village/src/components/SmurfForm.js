import React, { Component } from 'react';
import axios from 'axios';

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
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: parseInt(this.state.age, 10),
        height: this.state.height
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.placeholder]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input onChange={this.handleInputChange} placeholder="name" />
          <input onChange={this.handleInputChange} placeholder="age" />
          <input onChange={this.handleInputChange} placeholder="height" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
