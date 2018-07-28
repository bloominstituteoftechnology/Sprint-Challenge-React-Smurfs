import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf:{
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = { ...this.state.smurf };
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data, smurf:{name:'', age:'', height:''} })
      })
      .catch(error => console.log('error: ', error));
  

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ smurf: Object.assign({}, this.state.smurf, { name: e.target.value }) })
  }

  handleAgeChange = e => {
    this.setState({ smurf: Object.assign({}, this.state.smurf, { age: e.target.value }) })
  }

  handleHeightChange = e => {
    this.setState({ smurf: Object.assign({}, this.state.smurf, { height: e.target.value }) })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleNameChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleAgeChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleHeightChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
