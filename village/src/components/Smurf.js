import React from 'react';
import styled from 'styled-components';

const SmurfDivElement = styled.div`
  display: block;
  margin: 0 0 40px 20px;
`;

const SmurfNameElement = styled.a`
  display: block;
  margin: 0 0 10px;
  font-size: 1.4rem;
  text-decoration: underline;
  color: #88CCFF;
  cursor: pointer;
  opacity: .9;
  transition: all .3s linear;

  &:hover {
    opacity: 1;
  }
`;

const Smurf = props => {
  return (
    <SmurfDivElement>
      <SmurfNameElement onClick={() => {window.location.href=`/smurf/${props.id}`}}>{props.name}</SmurfNameElement>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => {window.location.href=`/update/${props.id}`}}>Update</button>
      <button onClick={() => {props.onDeleteSmurf(props.id)}}>Delete</button>
    </SmurfDivElement>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

