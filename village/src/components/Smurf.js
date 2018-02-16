import React from 'react';
import PropTypes from 'prop-types';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height}cm tall</strong>
      <p>{props.age} years old {props.key}</p>
    </div>
  );
}


export default Smurf;
