import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      {props.location.pathname === '/' ? (
        <div
          style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => props.goodbyeSmurf(props.id)}
        >
          X
        </div>
      ) : null}
      {props.location.pathname !== '/' ? (
        <h3>{props.name}</h3>
      ) : (
        <Link to={`/smurf/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      )}
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

// withRouter was needed here to be able to use props.location in the conditionals above

export default withRouter(Smurf);
