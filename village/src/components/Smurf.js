import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Link to={`/smurf/${props.id}`}><button> More Info </button></Link>
      <Link to={`/smurfs/${props.id}`}><button> Update </button></Link>
      <button onClick={() => {props.handleDelete(props.id)}}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

