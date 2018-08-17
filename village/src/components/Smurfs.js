import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Smurf from './Smurf';


class Smurfs extends Component {
  constructor(props) {
  super(props)
}


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
        
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              /> 
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
