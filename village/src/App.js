// react
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Dependencies
import axios from 'axios';

// Components
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

// Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs/')
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }

  handleNewSmurf = newSmurf => {
    axios
    .post('http://localhost:3333/smurfs/', newSmurf)
    .then(res => this.setState({
      smurfs: res.data
    }))
    .catch(err => console.log(err))
  }

  deleteSmurf = id => e => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }
  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route 
          path="/" 
          component={Header} 
        />

        <Route 
          path="/smurfs" 
          render={props => <SmurfForm {...props} handleNewSmurf={this.handleNewSmurf} />
          } 
        />

        <Route 
          path="/smurfs" 
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          } 
        />
      </div>
    );
  }
}

export default App;
