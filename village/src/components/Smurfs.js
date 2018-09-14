// React
import React, { Component } from 'react';

// Components
import Smurf from './Smurf';

// Styles
import './Smurfs.css';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs fade-in">
        <h1>Smurf Village</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
