import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs: [],
  }
  componentDidMount() {
    this.setState({ smurfs: this.props.smurfs })
  }
  render() {
    console.log('this in smurfs.js', this);
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf) => {
            return (
              <div key={smurf.id}>
                <button onClick={() => {this.props.onDelete(smurf.id)}}>nuke</button>
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} deleted={this.props.deleted}/>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;