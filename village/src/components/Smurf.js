import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div
        style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
        onClick={() => props.goodbyeSmurf(props.id)}
      >
        X
      </div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
