import React from 'react';
import Link from 'react-router';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}          <button onClick={(id) => props.deleteSmurf(props.id)}>X</button></h3>
      <strong>{props.height} tall</strong>
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

