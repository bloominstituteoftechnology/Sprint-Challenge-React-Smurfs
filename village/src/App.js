import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      refresh: false,
    }
    this.refresh = this.refresh.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Smurfs refreshBool={this.state.refresh}/>
        <SmurfForm refreshCB={this.refresh}/>
      </div>
    );
  }

  refresh() {
    this.setState({
      refresh: !this.state.refresh,
    });
  }
}

export default App;
