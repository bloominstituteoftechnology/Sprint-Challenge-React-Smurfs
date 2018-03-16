import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="smurfFormDiv">
        <SmurfForm updateMasterSmurf={this.updateMasterSmurf} addSmurf={this.addSmurf} getSmurfs={this.getSmurfs} />
        </div>
        <div className="smurfsDiv">
        <Smurfs addSmurf={this.addSmurf} getSmurfs={this.getSmurfs} />
        </div>
      </div>
    );
  }
}

export default App;
