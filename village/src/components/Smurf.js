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

Smurf.propTypes = {
  age: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

Smurf.defaultProps = {
  name: '',
  height: '',
  id: '',
  age: ''
};

export default Smurf;

