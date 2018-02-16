import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
   smurfs: [],
   
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    this.loadFriends();
  }

  loadFriends() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
  }

   deleteSmurf = (id) => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
    .delete(endpoint)
    .then(response => {
      console.log(response);
      this.loadFriends();
    })
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
          return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} id={smurf.id} onDelete={this.deleteSmurf} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;