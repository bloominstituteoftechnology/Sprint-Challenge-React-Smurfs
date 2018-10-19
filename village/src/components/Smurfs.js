// React and PropTypes import
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfsBody">
        <h1>Smurf Village</h1>
        <div className="smurfContainer">
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
  smurfs: []
};

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Smurfs;
