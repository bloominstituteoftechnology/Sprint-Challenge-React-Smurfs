import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf-container">
                <Smurf
                  updateSmurfs={this.props.updateSmurfs}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </div>
            );
          })}
        </ul>
        <Link to="/smurf-form">Add a new Smurf</Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
