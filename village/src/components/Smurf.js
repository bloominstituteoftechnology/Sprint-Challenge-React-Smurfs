import React from 'react';
import './Smurf.css';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>Name: {props.name}</h3>
      <strong>This Smurf is {props.height} tall</strong>
      <p>This Smurf is {props.age} years old</p>
    </div>
  );
}

export default Smurf;