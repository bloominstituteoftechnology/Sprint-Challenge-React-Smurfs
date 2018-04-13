import React from 'react';

const Smurf = props => {
  return ( // Use props values and methods for display and functionality
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={id => props.deleteSmurf(props.id)}>Delete</button>
      <button onClick={id => props.updateSmurf(props.id)}>Update</button>
    </div>
  );
};

export default Smurf;
