import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const { smurfs } = this.props
    return (
      <div>
        <h1>Smurf Village</h1>
        <div>
          <ul className="Smurfs">
            {smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Smurfs;
