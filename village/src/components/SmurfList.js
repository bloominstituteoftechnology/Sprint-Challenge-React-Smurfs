import React, { Component } from 'react';

import Smurf from './Smurf';

class SmurfList extends Component {
  render() {
    return (
      <div className="SmurfList">
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
          })}
        </ul>
      </div>
    );
  }
}

SmurfList.defaultProps = {
 smurfs: [],
};

export default SmurfList;
