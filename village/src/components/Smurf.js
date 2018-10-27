import React from 'react';
import { NavLink } from 'react-router-dom'
import '../index.css'
const Smurf = props => {
  return (
    <NavLink className="link" to={`/smurfs/${props.id}`}>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height}in tall</strong>
        <p>{props.age} smurf years old</p>
        <button onClick={() => props.delete(props.id)}>Delete Smurf</button>
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

