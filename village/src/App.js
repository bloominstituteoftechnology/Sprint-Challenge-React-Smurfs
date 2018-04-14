import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(){
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount(){
    this.fetchSmurfs()
  }
  fetchSmurfs(){
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({
        smurfs: response.data
      }))
      .catch(err => {
        console.error('Server Error Test to See if my Lambda Peeps are reading whaaat wink wink,', err)
      });
  }


  newSmurfHandler = newSmurfs => {
    this.setState ({ smurfs: newSmurfs})
  }


  updateSmurfs = newSmurfs => {
    this.fetchSmurfs();
  }



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm newSmurfHandler={this.newSmurfHandler}/>
        <Smurfs {...this.state} 
          updateSmurfs={this.updateSmurfs} 
          />
      </div>
    );
  }
}

export default App;
