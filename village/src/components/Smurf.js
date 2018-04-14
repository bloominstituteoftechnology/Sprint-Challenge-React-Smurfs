import React from 'react';

const Smurf = props => {
  return (
    <li className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </li>
  );
};

export default Smurf;
