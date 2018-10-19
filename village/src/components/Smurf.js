import React from 'react';

import './style.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>Name :  {props.name}</h3>
      <strong>Height :  {props.height} tall</strong>
      <p>Age : {props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

