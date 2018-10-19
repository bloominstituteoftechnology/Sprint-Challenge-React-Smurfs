import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
        <div className="table-header">
              <h2>Name</h2>
              <h2>Height</h2>
              <h2>Age</h2>
          </div>  
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf {...this.props}
                      name={smurf.name}
                      id={smurf.id}
                      age={smurf.age}
                      height={smurf.height}
                      key={smurf.id}
                      handleChange={this.props.handleChange}
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
