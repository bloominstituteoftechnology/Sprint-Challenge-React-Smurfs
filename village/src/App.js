import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs/')
      .then(response=> {
        console.log(response.data);
        return response;
      })
      .then(response => this.setState({ smurfs : response.data }))
      .catch(error => console.log(error));
  }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  updateState = (data) => {
    this.setState({ smurfs: data });
  }

  render() {
    return (
      <div className="App">
        <Smurfs query="all" update={this.updateState} smurfs={this.state.smurfs}>
          <SmurfForm update={this.updateState} />
        </Smurfs>
      </div>
    );
  }
}

export default App;
