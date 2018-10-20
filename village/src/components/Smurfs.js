import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className='smurf-collection'>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                editSmurf={this.props.editSmurf}
                history={this.props.history}
                smurf={smurf}
                setUpForm={this.props.setUpForm}
                chooseSmurf={this.props.chooseSmurf}
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
