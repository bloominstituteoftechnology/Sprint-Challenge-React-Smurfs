import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const API_URL = 'http://localhost:3333';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  async componentDidMount() {
    try {
      const response = await axios.get(`${API_URL}/smurfs`);

      this.setState({ smurfs: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  addSmurf = async smurfData => {
    try {
      const response = await axios.post(`${API_URL}/smurfs`, smurfData);

      this.setState({ smurfs: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="App">
        <SmurfForm onSubmit={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
