import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button } from 'react-materialize';

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
    let url = 'http://localhost:3333/smurfs';
    axios.post(url, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
      .then(res => {
        window.location = "/smurfs";
      })
      .catch(err => {
        console.log(err);
      })

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
        <h3> Welcome to our village! </h3>
        <form onSubmit={this.addSmurf}>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit">Add</Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
