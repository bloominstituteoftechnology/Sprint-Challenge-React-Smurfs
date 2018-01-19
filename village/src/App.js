import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: null
    }
  }

  loadSmurf = () => {
    const endpoint = "http://localhost:3333/smurfs"
    axios
    .get(endpoint)
    .then(response => {this.setState({smurfs: response.data})})
    .catch(error => {this.setState({error: error})})
  }

  addSmurf = (smurf) => {
    const endpoint = `http://localhost:3333/smurfs`
   axios
   .post(endpoint, smurf)
   .then(response => {this.loadSmurf()})
   .catch(error => { console.log(error)})
  }

  componentDidMount() {
    this.loadSmurf();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} loadSmurf={this.loadSmurf} />
        <Smurfs smurfs={this.state.smurfs} error={this.state.error} />
      </div>
    );
  }
}

export default App;
