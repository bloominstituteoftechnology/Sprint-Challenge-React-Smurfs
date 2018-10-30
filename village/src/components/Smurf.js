import React from 'react';
import { NavLink } from 'react-router-dom';


const Smurf = props => {
  return (
    <div className="Smurf">
      <NavLink to={`/smurf/${props.id}`} ><h3>{props.name}</h3></NavLink>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button  onClick={()=>{props.deleteSmurf(props.id)}}>Delete this smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

