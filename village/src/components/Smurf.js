import React from 'react';
import './smurf.css';

const Smurf = (props) => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
    </div>
  );
}

export default Smurf;