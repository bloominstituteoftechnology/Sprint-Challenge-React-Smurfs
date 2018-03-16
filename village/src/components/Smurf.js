import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>Name: {props.name}</h3>
      <strong>This Smurf is {props.height} tall</strong>
      <p>Age: {props.age} old</p>
    </div>
  );
}

export default Smurf;