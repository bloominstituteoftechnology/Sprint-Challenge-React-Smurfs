import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  }
  render() {
    return (
      <div className="App">
        <SmurfForm smurfs={this.state.smurfs}/>
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }

  componenentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      this.setState({ smurfs: response });
    })
    .catch((err) => {
      console.error('Error', err);
    })
  }
}

export default App;
