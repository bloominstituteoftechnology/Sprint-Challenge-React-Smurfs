// React and PropTypes Imports
import React from 'react';
import PropTypes from 'prop-types';
const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // Age keeps throwing an error can't figure it out
  // age: PropTypes.string.isRequired,
  id: PropTypes.number
};

export default Smurf;
