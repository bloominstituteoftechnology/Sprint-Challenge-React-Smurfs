import React from 'react';
import axios from 'axios';

const removeSmurf = (cb, id) => {
  console.log("Delete Called");
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
  cb();
}

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={(cb) => removeSmurf(props.cb, props.id)}>Delete Smurf</button>
    </div>
  );
};

export default Smurf;
