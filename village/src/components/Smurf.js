import React from 'react';
import DeleteSmur from './DeleteSmurf'

const Smurf = props => {
  
  return (
    <div key={props.id} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
   <DeleteSmur />
    </div>
  );
};

export default Smurf;
