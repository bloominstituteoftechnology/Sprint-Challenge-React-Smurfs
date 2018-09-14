import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <h3>Check out these Smurfs!</h3>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
               <Smurf
                
                smurfs={this.props.smurfs}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                />
            )}
          )}
          
        </ul>
      </div>
    );
  }
}

Smurfs.propTypes = {
  smurfs: PropTypes.array
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
