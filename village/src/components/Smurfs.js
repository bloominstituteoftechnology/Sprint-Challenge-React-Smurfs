import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <h1>Smurf Village</h1>
      <div className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                deleteSmurfFromServer={this.props.deleteSmurfFromServer}
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
