import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

const URL = 'http://localhost:3333/smurfs';

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
    const myPromise = axios.get(URL);

    myPromise
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  };

  addSmurf = smurf => {
    const myPromise = axios.post(URL, smurf);

    myPromise
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => {
        console.log(err)
      });
  };

  removeSmurf = id => {
    const myPromise = axios.delete(`${URL}/${id}`);

    myPromise
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route path="/smurfs" render={props => {
          return (
            <div>
              <SmurfForm {...props} addSmurf={this.addSmurf} />
              <Smurfs {...props} smurfs={this.state.smurfs} removeSmurf={this.removeSmurf} />
            </div>
          )
        }} />
      </div>
    );
  }
}

export default App;
