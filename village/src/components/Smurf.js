import React from 'react';

const Smurf = props => {
  return (
    <li className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </li>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

