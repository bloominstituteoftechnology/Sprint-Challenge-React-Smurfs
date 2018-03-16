import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  };

  componentDidMount(){
    this.uploadedSmurfs();
  }

  uploadedSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({
        smurfs: response.data,
      });
    })
    .catch((error) => {
      console.error('Error try again...');
    });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm uploadedSmurfs={this.uploadedSmurfs} />
        <Smurfs smurfs={this.state.smurfs} uploadedSmurfs={this.uploadedSmurfs} />
      </div>
    );
  }
}

export default App;
