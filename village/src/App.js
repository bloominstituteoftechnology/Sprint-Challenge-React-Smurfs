import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'; // <-- I can't believe I forgot to import that until so late
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

const url = "http://localhost:3333/smurfs/" // <-- Thanks, Tom!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs/")
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={ (props) => {
          return(<Smurfs {...props} smurfs={this.state.smurfs}/>)
          }} />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
