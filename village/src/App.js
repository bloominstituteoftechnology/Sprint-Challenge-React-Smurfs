import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // get smurfs from server
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(() => {
        console.error("error getting smurfs"); // using 'console.error' to show red icon in return
      });
  }

  addSmurf = () => {
    axios
    .post('http://localhost:3333/smurfForm', this.state)
    .then(response => {
      this.setState({
        smurfs: response.data, name:'', age:'', height:''
      });
    })
    .catch(error => {
      console.error('ERROR ADDING SMURF (error getting data)');
    });
  }


  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
