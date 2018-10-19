import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

const Smurf = props => {
  return (
    <Link to={`/smurf/${props.id}`}className="smurf">
      <div className="name">
        <h3>{props.name}</h3>
        <p onClick ={(event) => props.deleteSmurf(event, props.id)}> X </p>
      </div>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </Link>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

