import React, { Component } from 'react';
import axios from 'axios';
import Form from './elements/Form';
import Input from './elements/Input';
import Button from './elements/Button';

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
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios.post('http://localhost:3333/smurfs', smurf).then(res => {
      this.props.updateSmurfs();
    });
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.addSmurf}>
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
        <Button type="submit">Add to the village</Button>
      </Form>
    );
  }
}

export default SmurfForm;
