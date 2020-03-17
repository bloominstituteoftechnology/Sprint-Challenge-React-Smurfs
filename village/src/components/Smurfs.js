import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning.
  // You'll need to make sure you have the right properties on state for this to work
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
