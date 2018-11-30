import React, { Component } from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const StyledH1 = styled.h1`
  color: blue;
  padding: 0 20px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 30px;
  border-bottom: 1px solid blue;
`;
class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <StyledH1>Smurf Village</StyledH1>
        <ul>
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
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
