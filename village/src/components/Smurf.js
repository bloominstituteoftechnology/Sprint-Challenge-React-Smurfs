import React from 'react';
import { Link } from 'react-router-dom'
const Smurf = props => {
  return (
    <div className="Smurf">
    {props.smurfs.map((smurf, index) => <div key={index}>
      <h3>{smurf.name}</h3>
      <h4>{smurf.age}</h4>
      <h6>{smurf.height}</h6>
      <button onClick={() => props.delete(smurf.key)} >Delete</button>
    </div>)}
    </div> 
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

