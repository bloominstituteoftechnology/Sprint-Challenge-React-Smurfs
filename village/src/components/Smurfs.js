import React, { Component } from 'react';

import Smurf from './Smurf';
import './Smurfs.scss';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                smurf={smurf}
                key={smurf.id}
                deleteFunc={this.props.deleteFunc}
                updateFunc={this.props.updateFunc}
                history={this.props.history}
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
