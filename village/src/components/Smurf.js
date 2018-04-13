import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <h3>{props.age} smurf years old</h3>
      <h3>{props.height} tall</h3>
    </div>
  );
};

export default Smurf;
