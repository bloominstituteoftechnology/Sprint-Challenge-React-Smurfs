import React from 'react';
import { NavLink } from 'react-router-dom'

const Smurf = props => {
  return (
    <NavLink to="/smurf"><div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
    </NavLink>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

