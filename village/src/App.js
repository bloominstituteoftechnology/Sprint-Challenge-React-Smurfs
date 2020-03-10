import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import SmurfsContainer from './components/SmurfsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfsContainer />
      </div>
    );
  }
}

export default App;
