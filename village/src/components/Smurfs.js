import React, { Component } from 'react';
import Smurf from './Smurf';
import styled, { keyframes } from 'styled-components';
import smirfhead from './smirfhead.png';

const FlexSmirf = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 1%;
`;

const SpaceSmirf = styled.div`
  margin: 10px 1%;
`;

const MainTitle = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-size: 2rem;
`
const spin = keyframes`
  0%  {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(360deg);}
`;

const SmirfHead = styled.img`
  margin: 0 41%;
  animation: ${spin} 4s infinite linear;
`;



class Smurfs extends Component {
  render() {
    return (
      <div>
        <SmirfHead src={smirfhead} alt="smirfhead"/>
        <MainTitle>Smurf Village</MainTitle>
        <FlexSmirf>
          {this.props.smurfs.map(smurf => {
            return (
              <SpaceSmirf>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </SpaceSmirf>
            );
          })}
        </FlexSmirf>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
