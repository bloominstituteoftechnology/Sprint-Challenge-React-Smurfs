import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: []
  }
  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} onDelete={this.deleteSmurf} onUpdate={this.updateSmurf}/>
      </div> 
    );
  }
  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data});
    })
    .catch(error => {
      console.log('there was error', error);
    });
  }

  deleteSmurf = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    axios
      .delete(endpoint, smurf)
      .then(response => {
        this.loadSmurfs();
      })
      .catch(() => {
        console.error('Error Deleting Smurf');
      });
  };

  updateSmurf = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    return axios
      .put(endpoint, smurf)
      .then(response => {
        this.loadSmurfs();
      })
      .catch(() => {
        console.error('Error Updating Smurf');
      });
  };
}

export default App;
