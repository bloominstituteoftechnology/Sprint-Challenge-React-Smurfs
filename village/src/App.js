import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from "react-router-dom";


class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props){
    super(props);
    this.state = {
      smurfs: []
    }
  }

  componentDidMount(){
    this.updateSmurfs();

  }

  updateSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      return this.setState({ smurfs: response.data })})
    .catch(error => console.log(error))
  }



deleteSmruf = (id) => {
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => this.updateSmurfs())
  .catch(err => console.log(err))
}


  render() {
      console.log(this.state.smurfs);
    return (
      <div className="App">
        <SmurfForm update={this.updateSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmruf}/>
      </div>
    );
  }
}

export default App;
