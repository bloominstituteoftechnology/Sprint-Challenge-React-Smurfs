import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <NavLink className="nav-item" activeClassName="selected" to={`/smurfs/${props.id}`}>Enter Smurf</NavLink>
      <hr className="Smurf-split" />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

