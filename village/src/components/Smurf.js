import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../assets/delete.png';
import EditIcon from '../assets/edit.png';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 onClick={() => props.handleSmurfClick(props.smurf.id)}>{props.smurf.name}</h3>
      <img src={EditIcon} alt='edit' onClick={() => props.handleSmurfEdit(props.smurf.id)} />
      <img src={DeleteIcon} alt='delete' onClick={() => props.deleteSmurf(props.smurf.id)} />
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
    </div>
  );
};

// ?
// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

Smurf.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  }).isRequired,
  deleteSmurf: PropTypes.func.isRequired,
  handleSmurfEdit: PropTypes.func.isRequired,
  handleSmurfClick: PropTypes.func.isRequired
};

export default Smurf;
