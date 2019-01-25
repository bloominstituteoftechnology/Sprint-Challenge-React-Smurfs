import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  refreshApp = data => {
    this.setState({
      smurfs: data
    });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

        <Navigation />
          <Route path="/add" render={(props) => <SmurfForm refreshApp={this.refreshApp} smurfs={this.state.smurfs} />} /> 
          <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
