import React from 'react';
import PropTypes from 'prop-types';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

Smurf.PropTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  age: PropTypes.string,
}

export default Smurf;

