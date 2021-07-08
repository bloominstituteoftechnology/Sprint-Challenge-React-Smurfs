import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                {...this.props}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                handleDeleteSmurf ={this.props.handleDeleteSmurf}
                handleUpdateSmurf ={this.props.handleUpdateSmurf}
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
