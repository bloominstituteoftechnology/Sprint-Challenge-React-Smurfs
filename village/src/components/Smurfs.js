import React, { Component } from 'react';

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
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                editSmurf={this.props.editSmurf}
                history={this.props.history}
                smurf={smurf}
                setUpForm={this.props.setUpForm}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
