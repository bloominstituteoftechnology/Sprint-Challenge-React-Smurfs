import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button id={props.id} onClick={props.deleteSmurf}> &times; </button>
    </div>
  );
};

export default Smurf;
