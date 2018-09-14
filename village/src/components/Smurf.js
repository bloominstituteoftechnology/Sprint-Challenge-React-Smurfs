import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../assets/delete.png';
import EditIcon from '../assets/edit.png';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <img src={EditIcon} alt='edit...' onClick={() => props.handleSmurfEdit(props.id)} />
      <img src={DeleteIcon} alt='delete' onClick={() => props.deleteSmurf(props.id)} />
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

// ?
Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

Smurf.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  deleteSmurf: PropTypes.func.isRequired,
  handleSmurfEdit: PropTypes.func.isRequired
};

export default Smurf;
