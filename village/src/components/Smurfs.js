import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to="/">Click here to go back to homepage</Link>
        <SmurfForm setSmurfData={this.props.setSmurfData} />
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
