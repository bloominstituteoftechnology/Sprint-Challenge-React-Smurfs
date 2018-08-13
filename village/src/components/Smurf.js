import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => {props.deleteSmurf(props.id)}}>Delete {props.name}</button>
      <Link to={`/smurfs/${props.id}`}><button>Edit {props.name}</button></Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

