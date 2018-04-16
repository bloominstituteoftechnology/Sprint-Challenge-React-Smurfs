import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className="SmurfName">{props.name}</h3>
      <h3>{props.height} tall</h3>
      <h3>{props.age} smurf years old</h3>
      <button onClick={() => props.deleteSmurf(props.id)}> Delete Smurf </button>
    </div>
  );
}; 

export default Smurf;
