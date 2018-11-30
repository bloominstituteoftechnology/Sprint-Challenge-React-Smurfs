import React from 'react';

const Smurf = props => {
  
  const smurfs = props.smurfs.find( smurf => { return props.match.params.id === `${smurf.id}`})
  console.log(smurfs)
  return (
    <div className="smurf-wrapper">
      <div className='smurf'>
        <h3>name: {smurfs.name}</h3>
        <strong>height: {smurfs.height} </strong>
        <p>smurf years old: {smurfs.age} </p>
        <button onClick={() => { props.delete(props.match.params.id) 
        props.history.push('/')
          }}>X</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

