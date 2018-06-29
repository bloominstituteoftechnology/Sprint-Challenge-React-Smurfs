import React from 'react';

const Smurf = props => {
  return (
    <div className="smurfs">
      <div className="smurf_name" ><h3>{props.name}</h3></div>
      <div className="smurf_age" ><strong>{props.height} tall</strong></div>
      <div className="smurf_email" ><p>{props.age} smurf years old</p></div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;