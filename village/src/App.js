import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {

  state = {
    updated: false,
  }

  update = () => {
    this.setState({ updated: !this.state.updated });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm update={this.update}/>
        <Smurfs updated={this.state.updated}/>
      </div>
    );
  }
}

export default App;
