import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
   
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3000/smurfs")
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  handleSetData = data => {
    this.setState({smurfs: data});
  };
  
  
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Header} />
        <SmurfForm 
        handleSetData={this.handleSetData}
        />
        <Smurfs 
        smurfs={this.state.smurfs} 
        handleSetData={this.handleSetData}
        />
      </div>
    );
  }
}

export default App;
