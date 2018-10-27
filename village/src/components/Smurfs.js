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
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              <button onClick={() => this.props.handleDeleteSmurf(smurf.id)}>DELETE</button>
                {/* <h2>Name: {smurf.name}</h2>
                <h2>ID: {smurf.id}</h2>
                <h2>Age: {smurf.age}</h2>
                <h2>Height: {smurf.height}</h2> */}
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
