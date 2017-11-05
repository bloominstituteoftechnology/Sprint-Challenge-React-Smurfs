import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.id}) {props.name}</h3>
      <strong><em>{props.height} tall</em></strong>
      <p>{props.age} years old</p>
    </div>
  );
}

export default Smurf;