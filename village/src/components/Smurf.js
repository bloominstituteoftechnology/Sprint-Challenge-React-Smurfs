import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const H3SmurfName = styled.h3`
  font-family: 'Indie Flower', cursive;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Smurf = props => {
  return (
    <div className='Smurf'>
      <H3SmurfName>{props.name}</H3SmurfName>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
