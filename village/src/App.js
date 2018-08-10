import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {  Route } from "react-router-dom";
import Header from './components/Header';


const url = "http://localhost:3333/smurfs";

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
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        smurfs: response.data,
      });
    });
  }

  updateSmurfState = data => {
    this.setState({
      smurfs: data
    });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header}/>
        <Route exact path="/village" render={ props => ( <SmurfForm {...props} updateSmurfState={this.updateSmurfState} /> ) }/> 
        <Route  path="/village" render={ props => ( <Smurfs {...props} smurfs={this.state.smurfs} /> ) } />
        
      </div>
    );
  }
}

export default App;
