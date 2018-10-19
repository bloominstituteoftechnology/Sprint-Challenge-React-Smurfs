import React, { Component } from 'react';
import Smurf from './Smurf';

import '../App.css';

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
            <button
              className="delete-button"
              onClick={event => {
                props.deleteSmurf(event, smurf.id);
                props.history.push('/smurfs');
              }}
            >
              Delete
            </button>;
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
