import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivSmurf = styled.div`
  border: 1px solid black;
  background: blue;
  color: white;
  margin: 10px;
  padding: 0 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: lightblue;
    color: black;
    transition: 0.3s all ease-in;
  }
`;

const H3SmurfName = styled.h3`
  font-family: 'Indie Flower', cursive;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Smurf = props => {
  return (
    <DivSmurf className='Smurf'>
      <H3SmurfName>{props.name}</H3SmurfName>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </DivSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
