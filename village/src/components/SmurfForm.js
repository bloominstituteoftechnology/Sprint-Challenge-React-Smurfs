import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form `
background: #E5BE9E;
border: 1px solid #EAD7D1;
border-radius: 10px;
margin: 15% 0 5% 5%;
width: 90%;
height: auto;
padding: 1%;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
`
const Input = styled.input`
border: 1px solid #1F1A38;
border-radius: 5px;
text-align: center;
padding: 1%;
width: 60%;
font-size: 2rem;
margin: 1% 0;
color: #1F1A38;
background: #FFF4E2
`
const H1 = styled.h1`
font-size: 3rem;
font-weight: bold;
text-align: center;
width: 100%;
margin: 5% 0 10%;
color: #1F1A38;
`
const Button = styled.button`
background: #FFF4E2;
border: 1px solid #1F1A38;
padding: 1%;
border-radius: 5px;
color: #1F1A38;
width: 30%;
margin: 5% 0;
:hover{
  background: #1F1A38;
  color: #FFF4E2;
  border: 1px solid #FFF4E2;
}

`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     smurf: {
      name: '',
      age: '',
      height: ''
     }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
  }

  handleInputChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value 
      }  
      });
  };

  render() {
    return (
        <Form onSubmit={this.addSmurf}>
        <H1> Please Enter The Following Data: </H1>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <Button type="submit">Add to the village</Button>
        </Form>
    );
  }
}

export default SmurfForm;
