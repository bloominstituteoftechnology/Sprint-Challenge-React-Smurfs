import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className='Smurf-floating-text'>Smurf Detail</div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className='Smurf-buttons'>
        <Link exact to={`/edit-smurf/${props.id}`}>
          <button>Edit Smurf</button>
        </Link>
        <button onClick={() => props.deleteSmurf(props.id)}>
          Delete Smurf
        </button>
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

