import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    this.updateSmurfs();
  }
  updateSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({smurfs: response.data});
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the srvr
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={(props) => <SmurfForm updateSmurfs={this.updateSmurfs}/>} />
        <Route exact path='/' render={(props) => <Smurfs updateSmurfs={this.updateSmurfs} smurfs={this.state.smurfs}/>} />
      </div>
    );
  }
}

export default App;
