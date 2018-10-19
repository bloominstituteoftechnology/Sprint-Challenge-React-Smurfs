// React and PropTypes Imports
import React from 'react';
import PropTypes from 'prop-types';
const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
      <button onClick={e => props.deleteSmurf(e, props.id)}>Delete</button>
      <button
        onClick={function(e) {
          props.redirect();
          props.updateEditing(props.id);
        }}>
        Update
      </button>
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
  id: PropTypes.number,
  redirect: PropTypes.func.isRequired,
  deleteSmurf: PropTypes.func.isRequired,
  updateEditing: PropTypes.func.isRequired
};

export default Smurf;
