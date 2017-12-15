import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <div>Id: {props.id}</div>
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} Inches tall</strong>
      <p>Age: {props.age} years old</p>
    </div>
  );
}

export default Smurf;