import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Route exact path='/' render={ routeProps => 
              <Smurf {...routeProps} 
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                handleDelete={this.props.handleDelete}
              /> } />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
