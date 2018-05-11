import React, { Component } from 'react';
import axios from 'axios';
import { react } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({notes: response.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  saveNoteData = () => {
    const note = { age: this.state.age, email: this.state.email, name: this.state.name };
    axios.post('http://localhost:3333/smurfs', note)
    .then(savedNote => {
      console.log(savedNote);
    })
    .catch(err => {
      console.log(err);
    });
    this.setState({age: '', email: '', name: ''});
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
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
