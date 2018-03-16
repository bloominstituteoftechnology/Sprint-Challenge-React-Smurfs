import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>Name: {props.name}</h3>
      <strong>{props.name} is {props.height} tall</strong>
      <p>{props.name} is {props.age} years old</p>
    </div>
  );
}

export default Smurf;