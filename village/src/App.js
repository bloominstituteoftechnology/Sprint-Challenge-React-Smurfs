import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import EditSmurfForm from './components/EditSmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  }

  loadSmurfs = () => {
    const endpoint = 'http://localhost:3333/smurfs';
    
    axios
    .get(endpoint)
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }
  
  deleteSmurf = (id) => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
    .delete(endpoint)
    .then(response => {
      this.loadSmurfs();
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }

  updateSmurf = (id) => {
    const smurf = this.state.smurfs.find((obj) => {
      return obj.id === id;
    });
    // <EditSmurfForm name={smurf.name} age={smurf.age} height={smurf.height} updateSmurfs={this.loadSmurfs} />
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    const updates = {
      name: 'fred',
      age: 99,
      height: 23
    };
    axios
      .put(endpoint, updates)
      .then(response => {
        this.loadSmurfs();
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  componentDidMount() {
    this.loadSmurfs();
  }
  
  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfs={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} delete={this.deleteSmurf} edit={this.updateSmurf} />
      </div>
    );
  }
}

export default App;
