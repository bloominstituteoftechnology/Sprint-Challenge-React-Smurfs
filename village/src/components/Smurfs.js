import React, { Component } from 'react';

import Smurf from './Smurf';

const Smurfs = ({ smurfs, handleDelete }) => {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <div>{smurf.name}</div>
                <div>{smurf.id}</div>
                <div>{smurf.age}</div>
                <div>{smurf.height}</div>
                <button onClick={() => handleDelete(smurf.id)}>Remove</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
}




export default Smurfs;
