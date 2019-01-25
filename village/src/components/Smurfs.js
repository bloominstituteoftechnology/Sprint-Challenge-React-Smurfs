import React, { Component } from 'react';

import { Smurf } from './Smurf';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: #ffcb05;
  background-color: #00274c;
 `;

const H1 = styled.h1`
margin: 10px;

`;

class Smurfs extends Component {
  render() {
    return (
      <Container>
        <H1>Smurf Village</H1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </Container>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;




