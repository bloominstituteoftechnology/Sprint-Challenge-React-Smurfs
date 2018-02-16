import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return 
            <Smurf 
            key={smurf.id}
            name={smurf.name} 
            age={smurf.age} 
            height={smurf.height} 
             />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;