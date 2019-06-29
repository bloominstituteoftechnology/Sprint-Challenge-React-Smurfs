import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form `
background: ${props => props.mode === 'Add Smurf' ? '#E5BE9E' : `#1F1A38`};
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
background: #FFF4E2;
`
const H1 = styled.h1`
font-size: 3rem;
font-weight: bold;
text-align: center;
width: 100%;
margin: 5% 0 7.5%;
color: ${props => props.mode === 'Add Smurf' ? '#1F1A38' : `#FFF4E2`};
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
     },
     id: this.props.match.params.id
    };
  }

  addSmurf = event => {
    
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
   
  }

  updateSmurf = (event) => {
   
		event.preventDefault();
    this.props.updateSmurf(this.state.smurf, this.state.id);
   
  };
  
  handleMode = () => {
		if (this.props.mode === 'Add Smurf') {
			return this.addSmurf;
		} else {
			return this.updateSmurf;
		}
	};

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
        <Form mode={this.props.mode} onSubmit={this.handleMode()}>
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
          <Button type="submit">{this.props.mode}</Button>
        </Form>
    );
  }
}

export default SmurfForm;

SmurfForm.propTypes= {
  addSmurf: PropTypes.func,
  updateSmurf: PropTypes.func
}
