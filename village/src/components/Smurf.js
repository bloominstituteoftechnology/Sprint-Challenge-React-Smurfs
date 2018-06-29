import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <p>Smurf ID: {props.id}</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  id: ''
};

export default Smurf;

