import React from 'react';

const Smurf = props => {
  console.log(props)
  const smurf = props.smurfs.find( smurf => {return props.match.params.id === smurf.id})
  return (
    <div className="Smurf">
      {/* <h3>name: {smurf.name}</h3>
      <strong>height: {smurf.height} </strong>
      <p>smurf years old: {smurf.age} </p> */}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

