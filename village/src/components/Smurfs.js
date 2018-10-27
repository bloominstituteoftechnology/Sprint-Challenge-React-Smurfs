import React, { Component } from 'react';

import Smurf from './Smurf';

import styled from 'styled-components';

const SmurfsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1>Smurf Village</h1>
        <SmurfsContainer>
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
        </SmurfsContainer>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
