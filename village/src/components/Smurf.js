import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div>
      <Link to={`/smurfs/${props.id}`} className="smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </Link>
      <div className="smurf-controls">
        <button onClick={props.update}>Update</button>
        <button onClick={props.delete}>Delete</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

