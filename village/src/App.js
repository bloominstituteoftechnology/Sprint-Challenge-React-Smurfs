import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    // get call to smurfs list
    axios.get('http://localhost:3333/smurfs')
      // display the data 
      .then(res => {this.setState({smurfs: res.data})})
  }

  render() {
    // add condition for empty smurf array loading component
    return (
      <div className="App">
        <SmurfForm  add={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
