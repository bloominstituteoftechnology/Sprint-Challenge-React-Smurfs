import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const { smurfs, removeSmurf, ...props } = this.props;
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        {
          smurfs.length === 0 ?
          <div>Loading ... </div>:
          <ul>
            {smurfs.map(smurf => {
              return (
                <Smurf
                  {...props}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  removeSmurf={removeSmurf}
                  key={smurf.id}
                />
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
