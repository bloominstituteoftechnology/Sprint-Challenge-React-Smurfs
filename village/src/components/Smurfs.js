import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <Link to="/">Home</Link>
        <h1>Smurf Village</h1>
        <SmurfForm
          setSmurfData={this.props.setSmurfData}
          setErrorHandler={this.props.setErrorHandler}
        />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (

              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf = {this.props.deleteSmurf}
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
