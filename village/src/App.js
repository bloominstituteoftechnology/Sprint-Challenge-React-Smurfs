import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs });
      })
  }

  refresh() {
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      const smurfs = res.data;
      this.setState({ smurfs });
    })
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => <SmurfForm {...props} refreshSmurfs = {this.refresh()} /> } />
        <Route path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
