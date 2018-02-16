import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} old</p>
      <button onClick={() => props.delete(props.smurf.id)}>Delete</button>
    </div>
  );
}

export default Smurf;