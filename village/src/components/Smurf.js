import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 onClick={()=>{props.history.push(`/smurf/${props.id}`)}}>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => {props.history.push(`/smurfs/${props.id}`)}}>Update Smurf</button>
      <button onClick={() => {props.deleteSmurf(props.id)}}>Ask Smurf to leave the Village</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

