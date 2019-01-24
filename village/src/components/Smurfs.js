import React, { Component } from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const SmurfVillage = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 14px;
`;

const Village = styled.h1`
  font-weight: bold;
`;

const SmurfCards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfVillage>
        <Village>Smurf Village</Village>
        <SmurfCards>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </SmurfCards>
      </SmurfVillage>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
