import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Navigator from './components/Navigator';

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

  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response=>{
        //console.log(response);
        this.setState({smurfs: response.data})
      })
      .catch(error => console.log(error));
  }

  updateArray = (smurf) =>{
    this.setState({
      smurfs: [...this.state.smurfs, smurf]
    })
  }

  render() {
    return (
      <div className="App">
        <Navigator />
        <Route
          exact
          path='/add/'
          render={props=>(
            <SmurfForm />
          )}
        />
        <Route 
          exact
          path='/'
          render={props=>(
            <Smurfs
              smurfs={this.state.smurfs}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
