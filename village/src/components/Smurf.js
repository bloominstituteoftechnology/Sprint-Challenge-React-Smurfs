import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/smurfs/${props.id}`}> <h3>{props.name}</h3> </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <p style={{cursor: 'pointer'}} onClick={props.deleteSmurfHandler(props.id)}>Delete Smurf</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

