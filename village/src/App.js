import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Smurf from './components/Smurf';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(response => this.setState({smurfs : response.data})).catch(error => console.log(error));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  reloadSmurfs = (newSmurfs) => {
    this.setState({
      smurfs: newSmurfs
    })
  }
  
  render() {
    return (
     
      <div className="App">
      
      <div className = 'nav-bar'>
      <NavLink to = '/'>Smurfs</NavLink>
      <NavLink to = '/smurf-form'>Add Smurfs</NavLink>
      </div>
      
      <Route exact path = '/' render = {(props) => <Smurfs {...props} smurfs = {this.state.smurfs} />} />
      <Route path = '/smurf-form' render = {(props) => <SmurfForm {...props} reloadSmurfs = {this.reloadSmurfs} />} />
      <Route path = {`/smurfs/:smurfID`} render = {(props) => <Smurf {...props} smurfList = {this.state.smurfs}/>} />
      
      </div>
    );
  }
}

export default App;
