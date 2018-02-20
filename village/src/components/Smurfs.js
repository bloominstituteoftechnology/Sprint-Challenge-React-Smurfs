import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurf: [
      name = '',
      age = '',
      height = '',
    ]
  };
    render() {
      if (this.props.data) {
        var commentNodes = this.props.data.map(function (comment){
            return (
              <div>
                <h1>{comment.author}</h1>
              </div>
            );
        });
      } 
      return (
        <div className="Smurfs">
          <h1>Smurf Village</h1>
          <ul>
            { this.state.smurfs.map((smurf) => {
              return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
            })}
          </ul>
        </div>
      );
    }
}

export default Smurfs;