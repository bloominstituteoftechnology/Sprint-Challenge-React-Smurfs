import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsmurf: [],
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
    .then(response => {
      this.setState({ newsmurf: response.data })
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf} className="my-form">
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
          <button type="submit">Create Smurf!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
