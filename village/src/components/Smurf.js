import React from 'react';
import { SmurfWrapper } from '../styles/smurfStyles';

const Smurf = props => {
  return (
    <SmurfWrapper>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <i class="fas fa-minus-circle" onClick={() => props.deleteSmurf(props.id)}></i>
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

