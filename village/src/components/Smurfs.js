import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h2>Smurf Village Inhabitants</h2>
        <nav>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
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
