import React from 'react';

const Smurf = ({ name, height, age }) => {
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
    </div>
  );
};

export default Smurf;
