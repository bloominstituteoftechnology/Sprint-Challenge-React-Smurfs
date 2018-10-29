import React, { Component } from 'react';

import Smurf from './Smurf';

import styles from '../css/Smurfs.css'

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1 className = 'smurf-header'>Smurf Village</h1>
        <div className = 'smurf-character-container'>
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf = {this.props.deleteSmurf}
                />
              );
            })}
          </ul>
        </div>  
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
