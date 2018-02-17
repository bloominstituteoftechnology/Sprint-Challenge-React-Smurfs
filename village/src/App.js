import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  };

  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({
        smurfs: response.data,
      });
    })
    .catch((error) => {
      console.error(`Error nabbing up smurfs: ${error}`);
    });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm loadSmurfs={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} loadSmurfs={this.loadSmurfs} />
      </div>
    );
  }
}

export default App;
