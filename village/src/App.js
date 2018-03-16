import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {

  fireUpdate = () => {
    if (this.smurfz !== null) {
      this.smurfz.updateSmurfs();
    }
  };

  render() {
    return (
      <div className="App">
      <Route path="/" render={() =>
      <div>
        <SmurfForm updateSmurfs={this.fireUpdate}/>
        <Smurfs ref={(ref) => this.smurfz = ref}/>
      </div> } />
      <Route path="/smurfs/:smurf" />
      </div>
    );
  }
}

export default App;
