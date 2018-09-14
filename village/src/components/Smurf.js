import React from 'react';
import {Link} from 'react-router-dom'

const Smurf = props => {
  const button = props.location
  ? <Link to={`/smurfs/`}> <button> Village Square </button> </Link>
  : <Link to={`/smurfs/${props.id}`}> <button> My Hut </button> </Link>
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {button}
      <button onClick={(event) => props.delete(event, props.id)}> Banish </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
