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
    const { name, age, height } = this.state;
    event.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', {name, age, height})
      .then(response => {
        this.setState({ smurfs: response.data, name: "", age: "", height: "" });
        window.location.reload();
      })
      .catch(err => console.log('Ya gone did smurfed!', err));
  };
    // add code to create the smurf using the api


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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
