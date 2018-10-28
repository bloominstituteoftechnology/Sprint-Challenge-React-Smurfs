import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    let sortedSmurfs = this.props.smurfs.sort( (a,b) => {
      if (a.name<b.name) {return -1;}
      if (a.name>b.name) {return 1;}
      return 0;
    })
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {sortedSmurfs.map(smurf => {
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
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
