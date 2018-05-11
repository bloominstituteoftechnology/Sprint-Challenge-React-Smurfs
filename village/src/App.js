import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Smurf from './components/Smurf';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <h1>Welcome to the Smurf Village!</h1>}/>
        <Route exact path="/smurfs" component={Smurfs}/>
        <Route path="/addsmurf" component={SmurfForm}/>
        <Route path="/smurfs/:id" component={Smurf}/>
      </div>
    );
  }
}

export default App;
