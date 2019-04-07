import React from 'react';
// import Axios from 'axios';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h4>{props.name}</h4>
      <p>{props.height} inches tall</p>
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

