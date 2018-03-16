import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  

  

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {console.log(this.props, 'thisprops')}
          { this.props.smurfs.map((smurf) => {
            return (
              <div key={smurf.id} >
                <Smurf 
                id={smurf.id}
                name={smurf.name} 
                age={smurf.age} 
                height={smurf.height} 
                />
                <button id={smurf.id} onClick={this.props.delete}> Exile Smurf from the village </button>
            </div> )
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;