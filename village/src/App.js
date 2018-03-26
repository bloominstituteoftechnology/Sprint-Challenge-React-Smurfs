import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import UpdateForm from './components/UpdateForm';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Smurf Village </h1>
        <hr></hr>
        <br></br>
        <Route exact path="/" component={Smurfs} />
       {/* <Route path="/smurfList" component={ SmurfList }/> */}
        <Route path="/smurfs/:id" component={ Smurf }/>
        <Route path="/updateSmurf" componet={ UpdateForm} />
        <Route path="/addSmurf" component={ SmurfForm }/>
        
         
      </div>
    );
  }
}

export default App;

   