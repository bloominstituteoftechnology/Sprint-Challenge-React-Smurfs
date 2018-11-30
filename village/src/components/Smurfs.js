import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>{this.props.smurfs.length} Smurf{this.props.smurfs.length > 1 ? "s" : null } in the Village</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <li>
                <Link exact to={`/smurf/${smurf.id}`} key={smurf.id}>{smurf.name}</Link>
              </li>
            );
          })}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
