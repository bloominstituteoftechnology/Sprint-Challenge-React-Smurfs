import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
 
  
  // componentDidMount(){
  //   axios
  //   .get('http://localhost:3333/smurfs')
  //   .then(response => {
  //     this.setState({ smurfs: response.data }))
  //   .catch(error => console.log(error))
  // }


componentDidMount(){
  axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(err => {
        console.error('Error', err);
      });
}



  render() {
    console.log("app render", this.state.smurfs)
    return (
      <div className="App">
        <SmurfForm />
    <div>{this.state.smurfs.map(each => <Smurfs data={each} key={each.id} />)} </div>
      </div>
    );
  }
}

export default App;
