import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <a href="#" onClick={() => { props.deleteSmurf(props.id); }}>Remove</a>
    </div>
  );
}

export default connect(null, { deleteSmurf })(Smurf);