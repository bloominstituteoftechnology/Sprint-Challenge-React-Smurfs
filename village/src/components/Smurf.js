import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>smurfing {props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={()=>{props.deleteSmurf(props.id)}}>Put This Smurf Out of Its Missery</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

