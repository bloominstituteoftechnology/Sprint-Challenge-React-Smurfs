import React from 'react';
import PropTypes from 'prop-types';

const Smurf = props => {

  // const smurf = props.smurfs.find(
  //   smurf => smurf.id === parseInt(props.match.params.id, 10)
  // );

  function handleDelete() {
    console.log(props)
    props.deleteSmurf(props.id);
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

Smurf.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  age: PropTypes.number,
}

export default Smurf;

