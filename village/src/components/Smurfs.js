import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: props.smurf.name,
      age: props.smurf.age,
      height: props.smurf.height,
      id: props.friend.id
    };
  }

  render() {

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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
