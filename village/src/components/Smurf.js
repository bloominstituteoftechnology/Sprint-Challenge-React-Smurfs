import React from 'react';
import { SmurfWrapper } from '../styles/smurfStyles';
import { Link } from 'react-router-dom';

const Smurf = props => {
  const info = {
    name: props.name, 
    height: props.height, 
    age: props.age
  };
  return (
    <SmurfWrapper>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <i className="fas fa-minus-circle" onClick={() => props.deleteSmurf(props.id)}></i>
      <Link to={`/smurf-form/${props.id}`}><i className="fas fa-pencil-alt" onClick={() => props.updateSmurf(props.id, info)}></i></Link>
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

