import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Link, Route} from 'react-router-dom';

const URL = "http://localhost:3333/smurfs";

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
  componentDidMount = () => {
    axios
    .get(URL)
    .then (response => {
      this.setState(() => ({smurfs: response.data}));
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header}/>
        <Route path="/smurfs" component={SmurfForm} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
