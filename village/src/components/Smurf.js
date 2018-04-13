import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.age} smurf years old</p>
      <p>{props.height} tall</p>
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
    </div>
  );
};

export default Smurf;
