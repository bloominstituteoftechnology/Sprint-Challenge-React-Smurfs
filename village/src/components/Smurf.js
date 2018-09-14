import React from 'react';
import './Smurfs.css';

const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong className='smurf-stats'>{props.height} tall</strong>
      <p className='smurf-stats'>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

