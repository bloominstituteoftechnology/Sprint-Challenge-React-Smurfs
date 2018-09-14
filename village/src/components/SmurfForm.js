import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios 
      .post('http://localhost:3333/smurfs', this.state.smurf)
      .then(response => {
        this.setState({
          smurfs: response.data,
          smurf: { 
            name: '', 
            height: '', 
            age: '' },
        });
      })
      .catch(err => console.log(err));
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
      </div>
    );
  }
}

export default SmurfForm;
