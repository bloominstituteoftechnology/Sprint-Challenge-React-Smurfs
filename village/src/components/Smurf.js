import React from 'react';

const Smurf = ({ id, name, height, age, deleteSelf, selectSelf }) => {
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button id={id} onClick={deleteSelf}>&times;</button>
      <button id={id} onClick={selectSelf}>Edit Smurf</button>
    </div>
  );
};

export default Smurf;
