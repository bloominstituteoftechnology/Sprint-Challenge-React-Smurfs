import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import SmurfDelete from './components/SmurfDelete';
import SmurfsContainer from './components/SmurfsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsContainer />
        <SmurfForm />
        <SmurfDelete />
      </div>
    );
  }
}

export default App;
