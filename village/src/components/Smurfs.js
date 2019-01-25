import React, { Component } from 'react';

import { Smurf } from './Smurf';
import styled from "styled-components";

const Container = styled.div`
  width: 100%; 
  color: #00274c;
  background-color: #ffcb05;
  `

const H1 = styled.h1`
margin-bottom :10px;
text-align: center;
`

const Content = styled.div`
  width: 100%;
  color: #ffcb05;
  background-color: #00274c;
  padding-top: 15px;
  padding-bottom: 15px;
 `
 
class Smurfs extends Component {
  render() {
    return (
      <Container>
        <H1>Smurf Village</H1>
        <Content>
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
        </Content>
      </Container>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;




