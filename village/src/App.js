import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import './App.css';
import SmurfList from './components/SmurfList';
// import SmurfForm from './components/SmurfForm';
// import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/smurfs' component={SmurfList} />
        {/* <Route path='/' component={SmurfForm} /> */}
        {/* <Route path='/' component={Smurfs} /> */}
      </div>
    );
  }
}

export default App;
