import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {

fireUpdate = () => {
  if (this.smurfz !== null) {
    this.smurfz.updateSmurfs();
  }
};
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" render={() =>  
          <div>
            <SmurfForm updateSmurfs={this.fireUpdate} />
            <Smurfs ref={(ref) => this.smurfz = ref} />
          </div>
        } />
        <Route path="/smurfs/:smurf" />
      </div>
    );
  }
}

export default App;
