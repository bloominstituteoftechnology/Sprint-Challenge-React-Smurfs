import React from 'react';
import { withRouter } from "react-router-dom";

const Smurf = props => {
  return (
    <li
      className="smurf"
      onClick={() => props.history.push(`/smurf/${props.id}`)}
    >
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </li>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);

