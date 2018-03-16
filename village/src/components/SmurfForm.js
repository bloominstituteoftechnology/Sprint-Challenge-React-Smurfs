import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './smurf.css';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    
  }

  addSmurf(event) {
    //event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(response => {
      this.props.updateMasterState({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
    
    })
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <h3>Add a New Smurf Here</h3>
        <Form onSubmit={this.addSmurf}>
        <FormGroup>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          </FormGroup>
          <FormGroup>
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          </FormGroup>
          <FormGroup>
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          </FormGroup>
          <Button color="primary" size="lg" type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;