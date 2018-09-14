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
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                deleteSmurf={this.props.deleteSmurf} 
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// ?
Smurf.defaultProps = {
 smurfs: [],
};

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
      height: PropTypes.string
    })
  ).isRequired,
  deleteSmurf: PropTypes.func
};

export default Smurfs;
