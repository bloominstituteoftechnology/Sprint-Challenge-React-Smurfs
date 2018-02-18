import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
    const smurfs = this.props.smurfs;
    const onDelete = this.props.onDelete;
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id} key={smurf.id} onDelete={onDelete}/>;
          })}
        </ul>
      </div>
    );
  }

  
}

export default Smurfs;