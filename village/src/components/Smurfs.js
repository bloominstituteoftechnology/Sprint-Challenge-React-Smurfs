import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const H1SmurfVillage = styled.h1`
  font-family: 'Indie Flower', cursive;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class Smurfs extends Component {
  render() {
    return (
      <div className='Smurfs'>
        <H1SmurfVillage>Smurf Village</H1SmurfVillage>
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
