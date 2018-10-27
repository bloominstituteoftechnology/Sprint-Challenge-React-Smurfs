import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Smurf from './Smurf';
import smurfgroup from './smurfsgroup.jpg'
import '../index.css'

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <NavLink className="main-link link" to='smurf-form'>
          <p>Click Here To Add Smurfs</p>
        </NavLink>
        <h1>Smurf Village</h1>
        <img src={smurfgroup} alt='smurffamily' />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf className="Smurfs"
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={this.props.delete}
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
