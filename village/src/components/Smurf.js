import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  const returnToHome = () => {
    props.history.push('/');
  };

  const deleteSmurf = () => {
    returnToHome();
    props.deleteSmurf(props.id);
  };
  return (
    <div className="Smurf">
      <Link to={`/smurf/${props.id}`}>
        <h3 className="name">{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete</button>
      <Link to={`/smurf/${props.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
