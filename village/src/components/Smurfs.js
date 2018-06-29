import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
    display: block
    margin: 48px;
    text-decoration: none;
    &:hover{
      color: black;
    }
  `;
  
    return (
      <div className="Smurfs">
      <StyledLink to="/">Info pages</StyledLink>
      <StyledLink to="/addSmurf">Add Smurf</StyledLink>
        <h1>Smurf Village</h1>
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
 smurfs: [],
};

export default Smurfs;
