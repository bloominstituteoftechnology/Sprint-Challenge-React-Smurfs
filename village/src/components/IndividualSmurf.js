import React from 'react';

const IndividualSmurf = props => {
  console.log(props)
  return (<div className="Smurf">
    <h3>{props.smurfs.name}</h3>
    <strong>{props.smurfs.height}tall</strong>
    <p>{props.smurfs.age}smurf years old</p>
  </div>);
};

IndividualSmurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default IndividualSmurf;
