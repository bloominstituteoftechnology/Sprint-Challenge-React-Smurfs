import React from 'react';
import PropTypes from 'prop-types';

function Smurf(props) {
  return (
    <div className="Smurf">
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.height} tall</p>
      <p>{props.smurf.age} smurf years old</p>
    </div>
  );
};

Smurf.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string
  }),
}

export default Smurf;