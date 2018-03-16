import React, { Component } from 'react';

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
        <SmurfForm updateSmurfs={this.fireUpdate}/>
        <Smurfs ref={(ref) => this.smurfz = ref}/>
      </div>
    );
  }
}

export default App;
