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
                smurf={smurf} 
                deleteSmurf={this.props.deleteSmurf} 
                handleSmurfEdit={this.props.handleSmurfEdit} 
                handleSmurfClick={this.props.handleSmurfClick} 
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  };
};

// ?
// Smurf.defaultProps = {
//  smurfs: [],
// };

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      height: PropTypes.string,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  deleteSmurf: PropTypes.func,
  handleSmurfEdit: PropTypes.func,
  handleSmurfClick: PropTypes.func
};

export default Smurfs;
