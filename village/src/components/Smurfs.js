import React, { Component } from 'react';
import axios from "axios";
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  deleteFriend = (smurfId) => {
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => {
      this.props.fetchData()
    }) .catch(err => {
      console.log(err)
    })
   }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <button onClick={() => this.deleteFriend(smurf.id)}>Delete me</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
