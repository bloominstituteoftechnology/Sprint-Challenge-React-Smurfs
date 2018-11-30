import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid blue;
  width: 50%;
  margin: 0 auto 20px;
  display: block;

  &:nth-child(3) {
    margin-bottom: 50px;
  }

  &:placeholder-shown {
    text-transform: uppercase;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  background: blue;
  text-transform: uppercase;
  margin: 0 15px;
  letter-spacing: 2px;
  border-radius: 55px;
  box-shadow: 0 4px lightblue;
  position: relative;
  outline: none;
  border: 1px solid lightblue;

  &:hover {
    top: 2px;
    box-shadow: 0 2px lightblue;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0 lightblue;
  }
`;
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        this.props.resetVillage(res.data);
        this.setState({
          name: "",
          age: "",
          height: ""
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <StyledButton type="submit" onClick={this.addSmurf}>
            Add to the village
          </StyledButton>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
