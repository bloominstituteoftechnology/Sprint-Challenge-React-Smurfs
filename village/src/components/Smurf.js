import React from 'react';
import DeleteSmur from './DeleteSmurf'
import axios from 'axios';

const Smurf = props => {
  const deleteSmurf = () => {
    axios
    .delete(`http://localhost:3333/smurfs/${props.id}`)
  }
  return (
    <div key={props.id} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

export default Smurf;
