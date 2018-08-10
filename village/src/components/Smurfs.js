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
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <input
                onChange={this.props.handleInputChange}
                placeholder="edit age"
                value={this.props.age}
                name="age"
              />
              <input
                onChange={this.props.handleInputChange}
                placeholder="edit height"
                value={this.props.height}
                name="height"
              />
              <button onClick={() => this.props.edit(smurf.id)}>Edit Smurf</button>
              <button onClick={() => this.props.remove(smurf.id)}>Delete Smurf</button>
              </div>
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