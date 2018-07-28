import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      this.setState({ smurfs: res.data })
    })
  }

  handleSetData = smth => this.setState({ smurfs: smth }); 

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/addSmurf' render={(props) => <SmurfForm {...props} handleSetData={this.handleSetData} /> } />
        <Route path='/smurfs' render={(props) => <Smurfs {...props} handleSetData={this.handleSetData}  smurfs={this.state.smurfs} /> } />
      </Switch>
      </div>
    );
  }
}

export default App;
