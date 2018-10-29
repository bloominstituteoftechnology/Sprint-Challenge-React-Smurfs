import React from 'react';


const Smurf = props => {
  return (
    <div className="Smurf">
      {/* {props.smurfs.map(smurf =>{
      })} */}
      <h4>{props.name}</h4>
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

