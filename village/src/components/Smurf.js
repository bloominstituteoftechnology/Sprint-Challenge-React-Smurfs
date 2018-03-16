import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} inches tall</strong>
      <p>{props.age} old</p>
    </div>
  );
}

export default Smurf;