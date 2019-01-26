import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

import axios from 'axios';

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

  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
        .then(response => {
          this.setState({smurfs: response.data});
        })
        .catch(err => {console.log(err)});
  };

  postSmurfToServer = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
        .then(response => {
          this.setState({
            smurfs: [...this.state.smurfs, smurf]
          });
        })
        .catch(err => {console.log(err)});
  };

  deleteSmurfFromServer = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
          this.setState({
            smurfs: response.data
          });
        })
        .catch(err => {console.log(err)});
  };

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route path='/smurf-form' render={props => <SmurfForm {...props} postSmurfToServer={this.postSmurfToServer}/>}/>
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} delete={this.deleteSmurfFromServer}/>}/>
      </div>
    );
  }
}

export default App;
