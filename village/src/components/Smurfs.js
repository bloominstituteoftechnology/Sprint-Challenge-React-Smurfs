import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
                deleteSmurf={smurf.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

Smurfs.protoTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.string)
}

export default Smurfs;
