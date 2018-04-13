import React from 'react';
import axios from 'axios';
import Smurfs from './Smurfs';

const Smurf = props => {
  const deleteSmurf = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`, { id: props.id })
      .then();
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;
