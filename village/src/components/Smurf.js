import React from 'react';

const Smurf = props => {
  return (
    <div onClick={() => props.history.push(`/smurf/${props.id}`)} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <button onClick={(e) => {
        e.stopPropagation();
        props.history.push(`/smurf-update/${props.id}`)
      }} >update</button>

      <button onClick={(e) => {
        e.stopPropagation();
        props.removeSmurf(props.id)
      }}>remove</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

