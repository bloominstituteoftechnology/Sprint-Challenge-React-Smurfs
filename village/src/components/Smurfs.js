import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfWrapper>
        <h1>Smurf Village</h1>

        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              deleteSmurf={this.props.deleteSmurf}
              handleUpdateClick={this.props.handleUpdateClick}
            />
          );
        })}
      </SmurfWrapper>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
