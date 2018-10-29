import React from 'react';
import styles from '../css/Smurf.css'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className = 'delete-button' onClick = {() => {props.deleteSmurf(props.id)}}>Delete this homie</div> 
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

