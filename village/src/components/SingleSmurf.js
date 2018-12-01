import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

// ===========================
// ==== STYLED COMPONENTS ====
// ===========================

const StyledH3 = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: blue;
  border-bottom: 1px dashed blue;
  width: 100%;
  padding: 20px 0;
`;

const SmurfDiv = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid blue;
  width: 50%;
  margin: 0 auto 30px;
  padding-bottom: 20px;
  background: aqua;
  box-shadow: -2px 2px 8px rgb(0, 0, 0, 0.3);
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid blue;
  width: 50%;
  margin: 0 auto 20px;
  display: block;
  background: #d6bca5;

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
  border: 2px solid lightblue;

  &:hover {
    top: 2px;
    box-shadow: 0 2px lightblue;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0 lightblue;
  }
`;

// ===========================
// ====     COMPONENT     ====
// ===========================

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: null,
      name: "",
      age: "",
      height: "",
      id: ""
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        const smurf = res.data.find(
          smurf => smurf.id.toString() === this.props.match.params.id
        );
        this.setState({
          smurfs: res.data,
          smurf: smurf,
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
          id: this.props.match.params.id
        });
      })
      .catch(err => console.log(err));
  };

  editSmurf = e => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: parseInt(this.state.id, 10)
    };
    axios
      .put(`http://localhost:3333/smurfs/${data.id}`, data)
      .then(res => {
        this.props.resetVillage(res.data);
        this.setState({
          id: "",
          name: "",
          age: "",
          height: ""
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.smurf) {
      return (
        <Fragment>
          <SmurfDiv className="Smurf">
            <StyledH3>{this.state.name}</StyledH3>
            <strong>{this.state.height} tall</strong>
            <p>{this.state.age} smurf years old</p>
          </SmurfDiv>
          <form onSubmit={this.editSmurf}>
            <StyledInput
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
            />
            <StyledInput
              onChange={this.handleInputChange}
              value={this.state.age}
              name="age"
            />
            <StyledInput
              onChange={this.handleInputChange}
              value={this.state.height}
              name="height"
            />
            <StyledButton type="submit" onClick={this.editSmurf}>
              Update Smurf Data
            </StyledButton>
          </form>
        </Fragment>
      );
    }
    return null;
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
