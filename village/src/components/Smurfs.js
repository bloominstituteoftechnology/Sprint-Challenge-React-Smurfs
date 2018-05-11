import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to="/">Head Home!</Link> 
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                removeSmurf={this.props.removeSmurf}
                updateSmurf={this.props.updateSmurf}
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
