import React, { Component } from 'react';

import Smurf from './Smurf';
import PropTypes from 'prop-types';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                name={smurf.name}
                // id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurfs.propTypes = {
 smurfs: PropTypes.array,
 name: PropTypes.string,
 age: PropTypes.number,
 height:PropTypes.string,

};

export default Smurfs;
