import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
      smurfs:[],
    }
  

  componentDidMount(){
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  axios
    .get(`http://localhost:3333/smurfs/`)
    .then(result => this.setState(() => ({ smurfs: result.data })))
    .catch(console.log("Failed."));
    console.log(this.smurfs)
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;