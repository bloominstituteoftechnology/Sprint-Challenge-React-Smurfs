import React, { Component } from 'react';

import Smurf from './Smurf';
import {NavLink} from "react-router-dom";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smurf-form">Add A Smurf!</NavLink>
        </div>
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
