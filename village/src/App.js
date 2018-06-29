import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Smurf from './components/Smurf';

import styled from 'styled-components';
import background from './images/background.jpg';

const APP = styled.div`
  height: 100vh;
  background: url(${background});
  background-size: cover;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 5px #0a1f42;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-shadow: 3px 3px 5px #0a1f42;
`

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
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error))
  }

  updateState = newSmurfs => {
    this.setState({ smurfs: newSmurfs});
  }

  render() {
    return (
      <APP>
        <Route exact path="/" component={Header} />
        <Route exact path="/smurfs" component={SmurfForm} />
        <Route exact path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>} />
        <Route path="/smurfs/:id" render ={props => <Smurf {...props} updateState={this.updateState}/>} />
      </APP>
    );
  }
}

export default App;
