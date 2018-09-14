import React from 'react';
import PropTypes from 'prop-types';

  // const smurf = props.smurfs.find(
  //   smurf => smurf.id === parseInt(props.match.params.smurfId, 10)
  // );

// function handleDelete() {
//   props.deleteSmurf(smurf.id);
//   props.history.push('/smurfs');
// }

   /* <button onClick={handleDelete}>Delete Smurf</button>
    */

function Smurf(props) {
  console.log(props);



  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      </div>
  );
};

Smurf.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  age: PropTypes.number
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;