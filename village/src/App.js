import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.url = 'http://localhost:3333/smurfs'
    this.state = {
      smurfs: [],
    }
  }
    componentDidMount(){
      axios
        .get(this.url)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Problem!', response.data);
        })
    }

    makeSmurf = smurf => {
      axios
        .post(this.url, smurf)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Could not add Smurf!', response.data)
        })
    }

    deleteSmurf = id => {
      axios
        .delete(`${this.url}/${id}`)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Could not delete Smurf!', response.data)
        })
    }

    editSmurf = (id, smurf) => {
      axios
        .put(`${this.url}/${id}`, smurf)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Could not edit Smurf!', response.data)
        })
    }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/smurf-form' render={(props) => (<SmurfForm {...props} saveSmurf={this.makeSmurf} name='' height='' age='' />)} />
        <Route exact path='/village' render={(props) => (<Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} editSmurf={this.editSmurf}/>)} />
      </div>
    );
  }
}

export default App;
