import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
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

  componentDidMount() {
    this.loadSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfs={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
