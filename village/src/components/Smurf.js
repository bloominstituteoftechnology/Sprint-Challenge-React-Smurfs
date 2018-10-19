import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
      <div className="name">
        <h3>{props.name}</h3>
        <p onClick ={(event) => props.deleteSmurf(event, props.id)}> X </p>
      </div>
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

