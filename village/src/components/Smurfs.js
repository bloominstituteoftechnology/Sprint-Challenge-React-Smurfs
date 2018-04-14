import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props){
    super(props);
    this.state = {
      smurf: {}
    }
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map( (smurf, i) => {
            return (
              <div key={i}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                updateSmurfs={this.updateSmurfs} 
              />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
