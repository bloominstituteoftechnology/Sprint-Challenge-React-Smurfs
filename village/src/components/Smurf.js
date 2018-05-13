import React from 'react';
import './Smurf.css';

const Smurf = props => {
  return (
    <div className="smurf-card">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="remove-button" onClick={() => props.removeSmurf(props.id)}>Remove {props.name} From Village</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

