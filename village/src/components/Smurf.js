import React from 'react';
import './Smurf.css';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <div>
        <button onClick={() => {
          props.edit(props.id);
          }}
        >Edit</button>
        <button onClick={() => {
          props.delete(props.id);
          }}
        >
        Delete
        </button>
      </div>
    </div>
  );
}

export default Smurf;