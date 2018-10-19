import React from 'react';
import { withRouter } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} cm tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        className="button"
        onClick={event => {
          props.deleteSmurf(event, props.id);
          props.history.push('/smurfs');
        }}
      >
        Delete
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);
