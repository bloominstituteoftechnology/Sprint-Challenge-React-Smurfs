import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

import './smurfs.css';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor() {
    super();
    
    this.getSmurfs = this.getSmurfs.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.editSmurf = this.editSmurf.bind(this);
    this.state = {
      smurfs: [ {
          id: '',
          name: '',
          age: '',
          height: ''
        } ]
    }
  }
  
  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data });
      console.log(response);
    })
  }
  
  deleteSmurf(id) {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      
      this.getSmurfs();
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  editSmurf(id) {
    axios.put(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      this.getSmurfs();
    })
  }
  
  
  componentDidMount() {
    this.getSmurfs();
  }

  render() {
    return (
      <div>
        <SmurfForm getSmurfs={this.getSmurfs} />
        <h1>Smurf Village</h1>
        <div className="container">
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age}
              height={smurf.height} delete={this.deleteSmurf}
              edit={this.editSmurf} id={smurf.id} key={smurf.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Smurfs;