import React from 'react';

export const Smurf = props => 
  
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick = {() => props.deleteSmurf(props.id)} >Delete Smurf</button>
    </div>
  

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};



