import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.age} old</p>
      <strong>{props.height} tall</strong>
    </div>
  );
}

export default Smurf;