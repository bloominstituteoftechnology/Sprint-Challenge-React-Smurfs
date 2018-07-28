import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const StyledLink = styled(Link)`
    color: white;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  padding: 10px 20px;
  margin-left: 10px;
  text-decoration: none;
  background-color: black;  
  text-transform: capitalize;
  &:hover{
    color: blue;
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
                smurf={smurf}
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
