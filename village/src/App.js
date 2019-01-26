import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import { Route } from 'react-router-dom';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  addSmurf = (name, age, height) => {

    const newSmurf = {
      name: name,
      age: age,
      height: height
    }

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav> 
          <Navigation />
        </nav>
        <Route exact path='/smurf-form' render = { props => <SmurfForm {...props} addSmurf={this.addSmurf} /> } />
        <Route exact path='/' render= { props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
