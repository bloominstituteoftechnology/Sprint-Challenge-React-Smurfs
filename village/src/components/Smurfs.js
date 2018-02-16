import React, { Component } from 'react';
import Smurf from './Smurf';

const Smurfs = (props) => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        { props.smurfs.map((smurf) => {
          return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
        })}
      </ul>
    </div>
  );
}
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

export default Smurfs;