import React, { Component } from 'react'
import styled from 'styled-components'

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <SMURFS>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                url={smurf.url}
                key={smurf.id}
                remove={this.props.remove}
              />
            );
          })}
        </ul>
      </SMURFS>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

const SMURFS = styled.div`
  margin: 2rem 0;
  ul {
    display: flex;
    justify-content: center;
  }
`