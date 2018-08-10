import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurfs">Village</NavLink>
          <NavLink to="/smurf-counsel">Smurf Counsel</NavLink>
        </nav>
        <h1>Smurf Village</h1>
        <div className="village-smurf-container">
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
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
