import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

function smurfs(props) {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        );
      })}
    </ul>
  );
}

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    // editing: false,
    name: '',
    age: '',
    height: ''
  };
  
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.smurfs.map((smurf) => {
            return <Smurf 
              key={smurf.id}
              name={smurf.name} 
              age={smurf.age} 
              height={smurf.height} 
              />;
          })}
        </ul>
      </div>
    );
  }
}


smurfs.propTypes = {
  smurfs: PropTypes.array.isRequired,
}

smurfs.defaultProps = {
  smurfs: [],
};
export default Smurfs;