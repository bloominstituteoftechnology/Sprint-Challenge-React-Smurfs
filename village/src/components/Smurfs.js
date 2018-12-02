import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    // console.log('from smurfs', this.props)
    return (
      <div className="Smurfs">
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
{/* <Route path="/movies/:id" component={MovieCard} /> */}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
