import React, { Component } from 'react';
import './App.css';
import SmurfFormModal from './components/SmurfFormModal';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  state = {
    smurfs: [],
    name: '',
    age: '',
    height: ''
  }

  componentDidMount = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(data => this.setState({
        smurfs: data.data,
        name: '',
        age: '',
        height: ''
      }))
      .catch(err => console.log(err));
  }

  addSmurf = event => {
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', { name: this.state.name, age: this.state.age, height: this.state.height })
      .then(data => this.setState({
        smurfs: data.data,
        name: '',
        age: '',
        height: ''
      }))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="smurf-list">
          <Route path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
          <Link className="btn btn-secondary btn-sm" to="/addfriend">Want more Smurfs?!</Link>
        </div>
        <Route exact path="/addfriend" render={(props) => <SmurfFormModal {...props} onChange={this.handleInputChange} onSubmit={this.addSmurf} />} />


      </div>
    );
  }
}

export default App;
