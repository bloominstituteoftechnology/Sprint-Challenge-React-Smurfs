import React, { Component } from 'react';

const SmurfList = props => {
  if (!props.list || !props.list.length) {
    return <h1>Loading...</h1>
  }
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.list.map(smurf => {
            return (
              <div className="Smurf">
                <h3 onClick={() => props.history.push(`/smurfs/${smurf.id}`)}>{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
}

export default SmurfList;
