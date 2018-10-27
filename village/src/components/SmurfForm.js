import React, { Component } from 'react';

import styled from 'styled-components';

const FormContainer = styled.div`
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;
    max-width: 400px;
    width: 100%;
    height: 1000px;

    input {
      background: white;
    }
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
      height: this.state.height,
    }

    this.props.add(newSmurf)

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    event.target.reset();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormContainer>
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
          <button type="submit">Add to the village</button>
        </form>
      </FormContainer>
    );
  }
}

export default SmurfForm;
