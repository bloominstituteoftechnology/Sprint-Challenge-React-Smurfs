import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      url: 'http://localhost:3333'
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    const { url } = this.state;
    axios.get(`${url}/smurfs`)
    .then(({data}) => {this.setState({smurfs: data})})
    .catch(err => console.error(err));
  }

  updateSmurfs = (smurfs) => {this.setState({smurfs})}

  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} url={this.state.url} updateSmurfs={this.updateSmurfs}/>}/>
        <Route path="/" exact render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
