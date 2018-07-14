import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    axios // can you use fetch instead
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        console.log('GET RESPONSE: ', response);
        this.setState({ smurfs: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props

  updateSmurfs = (response) => {
    this.setState({ smurfs: response.data });
  };
  // all methods need to be done with arrow functions
  // to bind "this" to method if you aren't using bind(this)
  // because state is only being affected on app.js
  // so we want reset it wherever the delete function is called

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Route
          exact
          path="/"
          render={(props) => (
            <Smurfs {...props} smurfs={this.state.smurfs} updateSmurfs={this.updateSmurfs} />
          )}
        />
      </div>
    );
  }
}

export default App;
