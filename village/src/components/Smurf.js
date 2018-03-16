import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height}-cm tall</strong>
      <p>{props.age} years old</p>
      <button onClick={props.deleteSmurf} value={props.id}>X</button>
    </div>
  );
}

export default Smurf;