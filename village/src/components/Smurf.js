import React from 'react';

const Smurf=(props)=> {
  const smurf = props.smurfs.find(s => s.id.toString() === props.match.params.id);
  if (smurf){
    return (
      <div className="Smurf">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>)
  } else {
    return null;
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

