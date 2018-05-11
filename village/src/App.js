import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <h1>Welcome to the Smurf Village!</h1>}/>
        <Route path="/smurfs" component={Smurfs}/>
        <Route path="/addsmurf" component={SmurfForm}/>
      </div>
    );
  }
}

export default App;
