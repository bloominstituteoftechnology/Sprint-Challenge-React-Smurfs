import React from 'react';
import { NavLink } from 'react-router-dom'
const Smurf = props => {
  return (
    <div className="Smurf">
      <NavLink className="link" to={`/smurfs/${props.id}`}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      </NavLink>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

