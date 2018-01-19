import React from 'react';
import './Smurfs.css';


const Smurfs = (props) => {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  return (
    <div className="Smurfs--card">
      <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <button onClick={() => props.delete(props.id) }>Delete</button>
    </div>
    </div>
  );

}

export default Smurfs;