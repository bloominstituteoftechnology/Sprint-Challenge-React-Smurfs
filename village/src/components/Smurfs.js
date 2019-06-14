import React, { Component } from "react";

import Smurf from "./Smurf";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  justify-content: center;
`;
const SmurfContainer = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
`;
class Smurfs extends Component {
  createSmurfs = () => {
    return this.props.smurfs.map(smurf => {
      return (
        <Smurf
          name={smurf.name}
          id={smurf.id}
          age={smurf.age}
          height={smurf.height}
          key={smurf.id}
        />
      );
    });
  };
  render() {
    return (
      <Container>
        <h1>Smurf Village</h1>
        <SmurfContainer>{this.createSmurfs()}</SmurfContainer>
      </Container>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
