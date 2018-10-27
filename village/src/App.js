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
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount()    {
      axios.get(`http://localhost:3333/smurfs`)
      .then(data    =>  this.setState((state)   =>  ({
          smurfs: data.data
      })))
      .catch(err    =>  {
          console.log("In Catch", err);
      })
  }

  updateSmurfs  =   (newSmurfList)  =>  {
      this.setState((state) =>  ({
          smurfs: newSmurfList.data,
      }))
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()    =>  <Smurfs smurfs={this.state.smurfs}/>} />
        <Route path="/smurf-form" render={()    =>  <SmurfForm updateSmurfs={this.updateSmurfs}/>}  />
      </div>
    );
  }
}

export default App;
