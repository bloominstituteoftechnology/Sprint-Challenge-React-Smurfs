import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadSmurfs}/>
        <Smurfs />
      </div>
    );
  }

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
      .catch(() => {
        console.error('error getting data');
      });
  };

}

export default App;
