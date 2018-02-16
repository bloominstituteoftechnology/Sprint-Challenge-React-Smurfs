import React, { Component } from 'react';
// import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        {this.props.loading && <div>Loading...</div>}

        {!this.props.loading && (
          <ul>
            { this.props.smurfs.map((smurf, i) => {
              return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={i} />
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Smurfs;