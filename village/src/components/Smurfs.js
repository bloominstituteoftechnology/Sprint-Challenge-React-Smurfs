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
            <Smurf toggleEdit={props.toggleEdit} edit={smurf.edit} name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id} delete={props.deleteSmurf} modify={props.modifySmurf} handleInput={props.handleInput} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Smurfs;