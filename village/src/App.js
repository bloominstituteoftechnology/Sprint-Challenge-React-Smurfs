import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      err: '',
      loading: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
   componentDidMount() {
     this.setState({ loading: true})
     axios
     .get('http://localhost:3333/smurfs')
     .then( response => {console.log("get fetchSmurf: ", response.data);
        this.setState({
          smurfs: response.data,
          error: '', 
          loading: false
          })
        })
     .catch(err => {console.log("fetchSmurf error: ", err);
    this.setState({
      err: 'Smurf not found', 
      smurfs: [], 
      loading: false})});
   }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
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
