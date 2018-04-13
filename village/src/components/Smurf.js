import React from 'react';
import axios from 'axios';
import Smurfs from './Smurfs';


const deleteSmurf = smurfId => {
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => {
      this.props.getSmurfs();
    })
    .catch(err => {
      console.log(err);
    });
};

const Smurf = props => {

  return (
    <div key={Smurf._id} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => this.deleteSmurf(Smurf._id)}> remove smurf </button>
    </div>
  );
};

export default Smurf;
