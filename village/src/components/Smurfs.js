import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';


class Smurfs extends Component {
  state = {
    smurfs: [0],
  }
  componentDidMount() {
    axios.get('http://localhost:3333')
      .then(response => {
        console.log(response);
        this.setState(() => { smurfs: response });
      })
      .catch(error => {
        console.error(error);
      });
    console.log();
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map((smurf) => {
            return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;