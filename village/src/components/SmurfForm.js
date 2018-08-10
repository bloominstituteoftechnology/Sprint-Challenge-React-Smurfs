import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Input, Label, FormGroup } from 'reactstrap';
import styled from 'styled-components';

const SmurfFormDiv = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SForm = styled(Form) `
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

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
      height: this.state.height
    };

    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(() => {
      this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.fetchSmurfs();
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SmurfFormDiv>
        <h2>New Smurf Info:</h2>
        <SForm onSubmit={this.addSmurf}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Age:</Label>
            <Input
              type="number"
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <Label>Height:</Label>
            <Input
              type="text"
              onChange={this.handleInputChange}
              placeholder="height in cm"
              value={this.state.height}
              name="height"
            />
          </FormGroup>
          <Button type="submit">Add to the village</Button>
        </SForm>
      </SmurfFormDiv>
    );
  }
}

export default SmurfForm;
