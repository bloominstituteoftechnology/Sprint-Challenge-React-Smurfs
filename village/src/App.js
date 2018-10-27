import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name:'',
        age: '',
        height: ''
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("In Catch", err);
      })
  }

  handleAddNewSmurf = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", this.state.smurf)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("Could not add new Smurfs :(", err);
      })
  }



  render() {
    console.log(this.state.smurf)
    return (
      <div className="App">
        <SmurfForm handleAddNewSmurf={this.handleAddNewSmurf} smurf={this.state.smurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
