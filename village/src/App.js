import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
    };
  };

  getData = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data });
    })
    .catch(error => {
      alert('There was an error:', error);
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm getData={this.getData} />
        <Smurfs getData={this.getData} smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
