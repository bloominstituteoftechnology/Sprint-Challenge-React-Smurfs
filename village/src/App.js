import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  };

  getSmurfs = () => {
    const endpoint = 'http://localhost:3333/smurfs';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => console.log('there was an error', error));
  };

  componentDidMount = () => {
    this.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <SmurfForm getSmurfs={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
