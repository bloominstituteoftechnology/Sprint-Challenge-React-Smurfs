import React from 'react';
import { Link } from 'react-router-dom';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3> {props.height} tall and {props.age} smurf years old
      <button onClick={event=>props.handleDeleteSmurf(event,props.id)}>Delete Smurf</button>
      <Link to={`/smurf-form/${props.id}`} onClick={event=>props.handleUpdateSmurf(event,props.id)}>Update Smurf</Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

