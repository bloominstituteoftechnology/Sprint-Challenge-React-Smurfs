import React from 'react';
import './smurf.css'
import DeleteSmurff from './DeleteSmurf'
import axios from 'axios';

const Smurf = props => {
  const deleteSmurf = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`)
  }

  return (
    <div key={props.id} className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete Smurf</button>
    </div>
  );
};

export default Smurf;
