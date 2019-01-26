import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {

  const removeSmurf = event => {
    event.preventDefault();
    props.deleteSmurf(props.id)
  }

  return (
    <div className="Smurf">
        <h3>{props.name} <span onClick={removeSmurf}>&times;</span></h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
