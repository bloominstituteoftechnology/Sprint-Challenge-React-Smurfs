import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import {  Route,  } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log("Get Response",response);
      this.setState({smurfs: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  
  handleSmurfData = data => {
    this.setState({ smurf: data });
  };

  render() {
    return (
      <div className="App">
      <Header />
        <SmurfForm 
        handleSmurfData={this.handleSmurfData}
        />
        <Smurfs smurfs={this.state.smurfs}
        handleSmurfData={this.handleSmurfData} />
        {/* <Route exact path= "/" component={SmurfForm}/> */}
      </div>
    );
  }
}; 

export default App;
