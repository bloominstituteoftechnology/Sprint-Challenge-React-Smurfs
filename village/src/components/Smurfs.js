import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => <Smurf id={smurf.id} smurf={smurf}/>)
          }
          
        </ul>
      </div>
    );
  }
}



export default Smurfs;
