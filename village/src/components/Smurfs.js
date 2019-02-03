import React, { Component } from 'react';
import Smurf from './Smurf';
import { Route } from 'react-router-dom';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className='village'>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf smurf={smurf}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
