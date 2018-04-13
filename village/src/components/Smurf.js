import React from 'react';

const Smurf = ({ id, name, height, age, deleteSelf }) => {
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button id={id} onClick={deleteSelf}>&times;</button>
    </div>
  );
};

export default Smurf;
