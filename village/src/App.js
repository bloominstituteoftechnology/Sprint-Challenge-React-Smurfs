import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Header />
        <div>
          <Route exact path="/" component={Smurfs} />
        </div>
        <Route path="/:id" render={(props) => {
          return <Smurf {...props} />
        }} />
      </div>
    );
  }
}

export default App;
