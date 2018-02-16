import React, { Component } from 'react';
import Smurf from './Smurf';

function Smurfs (props){
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        { props.smurfs.map((smurf) => {
          return (
            <div key={smurf.id} >
            <Smurf name={smurf.name} age={smurf.age} height={smurf.height}/>
            <button onClick={()=>{props.deleteSmurf(smurf.id)}}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Smurfs;