import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} years old</p>
      <p>ID: {props.id}</p>
    </div>
  );
}

export default Smurf;
