import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
    <Link to={`/smurfs/${props.smurf.id}`}>
    
      <h3>{props.smurf.name}</h3>
      </Link>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
    </div>
  );
};



export default Smurf;

