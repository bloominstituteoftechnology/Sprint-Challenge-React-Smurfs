import React, { Component } from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: blue;
  border-bottom: 1px dashed blue;
  width: 100%;
  padding: 20px 0;
`;

const Span = styled.span`
  position: absolute;
  top: 25px;
  right: 35px;
  color: red;
  font-weight: bolder;
  cursor: pointer;

  &:hover,
  &:active {
    transform: scale(1.5);
  }
`;

const SmurfDiv = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid blue;
  width: 50%;
  margin: 0 auto 30px;
`;

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    };
  }

  render() {
    return (
      <SmurfDiv className="Smurf">
        <StyledH3>{this.props.name}</StyledH3>
        <Span onClick={() => this.props.deleteSmurf(this.props.id)}>X</Span>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
      </SmurfDiv>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
