import React, { Component } from 'react';
import Smurf from './Smurf';

const Smurfs= props=> {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <div className="SmurfCard" key={smurf.id}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
              />
              <button onClick={()=>props.func(smurf.id)}>Poof!</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
