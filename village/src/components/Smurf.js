import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <button onClick={() => props.onDelete(props.id)}>Delete {props.name}</button>
    </div>
  );
}

export default Smurf;