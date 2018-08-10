import React, { Component } from 'react';
import axios from 'axios'; 
const url = "http://localhost:3333/smurfs"; 

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
      email: this.state.email
    };
      axios
        .post(url, newSmurf)
        .then(response => {
          this.setState({
            smurfs: response.date
          });
        })
        .catch(err => console.log(err));
    };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
    <div className="Village-page">
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
          <button onClick={this.state.addSmurf}>Add to the village</button>
        </form>
      </div>
      </div>
    );
  }
}

export default SmurfForm;
