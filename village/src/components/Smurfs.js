// React and PropTypes import
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
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
  smurfs: []
};

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Smurfs;
