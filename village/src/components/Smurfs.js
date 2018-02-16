import React, { Component } from 'react';
import Smurf from './Smurf';

function Smurfs (props){
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

export default Smurfs;