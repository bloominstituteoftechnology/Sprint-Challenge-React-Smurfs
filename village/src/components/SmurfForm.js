import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input } from '@material-ui/core';

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
    // add const smurf since one doesn't exist in state above
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    // add code to create the smurf using the api
    // push the above smurf in as an argument
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        // pass in the function from App to pushSmurf to smurfs array.
        this.props.smurfAdder(response.data);
        // reset state on this form
        this.setState({
          name: '',
          age: '',
          height: '',
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
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
            placeholder="height in cm"
            value={this.state.height}
            name="height"
          />
          <Button variant="outlined" color="primary" type="submit">Add to the village</Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
