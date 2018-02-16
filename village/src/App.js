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
        <SmurfForm onCreate={this.loadSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} onDelete={this.removeSmurf}/>
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

  removeSmurf = id => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log(response);
        let smurfs = this.state.smurfs;
        smurfs = smurfs.filter(smurf => smurf.id !== response.data.SmurfRemoved.id);
        this.setState({ smurfs: smurfs});
      })
  };

}

export default App;
