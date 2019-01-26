import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${props.id}`}>
        <h3 className="name">{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
