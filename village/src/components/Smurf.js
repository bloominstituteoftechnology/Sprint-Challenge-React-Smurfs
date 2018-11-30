import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <button onClick={() => props.delete(props.id)}>Remove Smurf</button>
      <Link to={`/smurf-form/${props.id}`}>
          <button>Edit Smurf</button>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

