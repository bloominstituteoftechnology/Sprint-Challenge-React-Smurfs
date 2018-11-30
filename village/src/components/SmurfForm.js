import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 60%;
  min-width: 600px;
  margin: 50px auto;
  padding: 40px 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
`

const FormHeader = styled.h2`
  font-size: 2rem;
  width: 100%;
`

const FormInput = styled.input`
  width: 60%;
  padding: 15px;
  margin: 10px 200px 10px 20px;
  border: 0;
  border-radius: 5px;
`

const FormButton = styled.button`
  background-color: #F52C07;
  color: #fff;
  font-size: 1rem;
  border: 2px solid;
  box-shadow: 0 15px 0 0 #bc2207;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  padding: 5px 20px;
  position: absolute;
  right: 50px;
  bottom: 62px;

  &:active {
    background-color: #bc2207;
    border: 2px solid #c6c6c6;
    color: #c6c6c6;
    box-shadow: 0 10px 0 0 #bc2207;
    bottom: 57px;
  }

  &:focus {
    outline: 0;
  }
`

// End Styled Components =====================

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
    }

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        console.log('Form Response', res);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
      })
    this.props.history.push("/");
    
    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
    <React.Fragment>
      <FormHeader>Smurf Form</FormHeader>
      <FormWrapper>
        <form onSubmit={this.addSmurf}>
          <FormInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <FormInput
            onChange={this.handleInputChange}
            type="number"
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <FormInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <FormButton type="submit">Add to the village</FormButton>
        </form>
      </FormWrapper>
    </React.Fragment>
    );
  }
}

export default SmurfForm;
