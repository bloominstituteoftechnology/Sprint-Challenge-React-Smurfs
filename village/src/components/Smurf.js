import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} tall</strong>
      <p>Age: {props.age} old</p>
      {console.log(props, props)}
      
    </div>
  );
}

export default Smurf;