import React from 'react';
import './SmurfCard.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
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

