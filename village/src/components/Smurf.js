import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} inches tall</p>
      <p>{props.age} years old</p>
    </div>
  );
}

export default Smurf;