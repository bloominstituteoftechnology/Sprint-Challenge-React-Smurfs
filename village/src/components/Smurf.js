import React from 'react';
import { NavLink } from 'react-router-dom';

const Smurf = (props) => {

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <p>{props.id}</p>
      <NavLink to={`/smurfs/${props.id}`} >Go to page</NavLink>
      <button onClick={event => {props.goToSmurfForm(event, props.id)}}>Edit Smurf</button>
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
    </div>
  );

};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;