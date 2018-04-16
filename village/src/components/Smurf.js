import React from 'react';

const Smurf = ({ name, height, age }) => {
  return (
    <div className="Smurf">
      <h3 className="SmurfName">{name}</h3>
      <h3>{height} tall</h3>
      <h3>{age} smurf years old</h3>
    </div>
  );
};

export default Smurf;
