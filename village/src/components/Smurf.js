import React from 'react';
import './Smurf.css';

const Smurf = props => {

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="removeBtn" type="button" onClick={ () => props.deleteSmurf(props.id)}>Remove</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

