import React from 'react';
import '../App.css';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className='X' onClick={props.deleteHandler(props.id)}> X </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

