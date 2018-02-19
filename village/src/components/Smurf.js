import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h4>{props.name}</h4>
      <h4>{props.height} ft tall</h4>
      <h4>{props.age} years old</h4>
    </div>
  );
}

export default Smurf;
