import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  addSmurfsOnCreate = smurfs => {
    this.setState({ smurfs });
  }

  fetch = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.fetch(); //this call allows for the list to be updated and smurf to be removed upon delete
      })
      .catch(err => {
        console.log(err);
      });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        <SmurfForm addSmurfsOnCreate={this.addSmurfsOnCreate} />
        <Smurfs deleteSmurf={this.deleteSmurf} smurfs={smurfs} />
      </div> //deleteSmurf here us a 'handler'
    );
  }
}

export default App;
