import React, { Component } from 'react';
import styled from "styled-components";
import smurfizer from "./SmurfStyles";

const SmurfingSmurfFormDiv = styled.div`
  background-color: ${smurfizer.smurfLight};
  height: 200px;
  padding: 100px;
`;

const SmurfingForm = styled.form`
  border: 10px dotted ${smurfizer.smurfNavy};
  padding: 50px;
`;

const Smurfput = styled.input`
  margin: 10px;
  border: 2px solid ${smurfizer.smurfDark};
  color: ${smurfizer.smurfSky};
  background: ${smurfizer.smurf};
  font-size: 2rem;
`;

const SmurfButton = styled.button`
  margin: 10px;
  border: 2px solid ${smurfizer.smurfDark};
  color: ${smurfizer.smurfSky};
  background: ${smurfizer.smurfCornflower};
  font-size: 2rem;
  border-radius: 5px;

  :hover{
    background: ${smurfizer.smurfLight};
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `Smurf ${Math.random()}`,
      age: `Smurf ${Math.random()}`,
      height: `Smurf ${Math.random()}`
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.onSubmit(this.state);

    this.setState({
      name: `Smurf ${Math.random()}`,
      age: `Smurf ${Math.random()}`,
      height: `Smurf ${Math.random()}`
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SmurfingSmurfFormDiv>
        <SmurfingForm onSubmit={this.addSmurf}>
          <Smurfput
            onChange={this.handleInputChange}
            placeholder="Smurf name"
            value={this.state.name}
            name="name"
          />
          <Smurfput
            onChange={this.handleInputChange}
            placeholder="Smurf age"
            value={this.state.age}
            name="age"
          />
          <Smurfput
            onChange={this.handleInputChange}
            placeholder="Smurf height"
            value={this.state.height}
            name="height"
          />
          <SmurfButton type="submit">Add to the smurf village</SmurfButton>
        </SmurfingForm>
      </SmurfingSmurfFormDiv>
    );
  }
}

export default SmurfForm;
