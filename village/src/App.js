import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const serverRoot = 'http://localhost:3333';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get(serverRoot + '/smurfs')
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log('couldn\'t get smurf list'));
  }

  addSmurf = (smurfObj) => {
     axios
      .post(serverRoot + '/smurfs', smurfObj)
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log('couldn\'t get smurf list'));
  }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
