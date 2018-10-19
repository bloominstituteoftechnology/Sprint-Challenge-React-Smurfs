import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <button id={props.id} onClick={(event) => props.deleteSmurf(event, props.id) }>Smurf! :(</button>
      <h3>{props.name}</h3>
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

