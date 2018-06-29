import React, { Component } from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  const handleDelete = id => {
    props.handleDelete(id);
  };
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <button onClick={() => handleDelete(smurf.id)}>Delete Smurf</button>
              </div>
            );
          })}
        </ul>
      </div>
    ); 
}

export default Smurfs;
