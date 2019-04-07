import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <p>Id#: {props.id}</p>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
     
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  id:'',
};

export default Smurf;

