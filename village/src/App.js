import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import UpdateModal from './components/UpdateModal';
import bulma from 'bulma/css/bulma.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
const URL = 'http://localhost:3333/smurfs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      updateModalActive: false
    };
  }
  componentDidMount() {
    axios.get(URL)
    .then(response => {
      console.log(response.data);
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      console.log(err);
  });
}

  addSmurf = (name, age, height) => {
    const smurf = {
      name: name,
      age: Number(age),
      height: height + 'cm'
    }

    axios.post(URL, smurf)
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

 
  deleteSmurf = (id) => {
    axios.delete(`${URL}/${id}`)
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  inputChange = (e) => {
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }
  toggleUpdateModal = () => {
    this.setState({ updateModalActive: !this.state.updateModalActive });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path ='/' component={Header} />
        <Route exact path = '/smurfs'
        render = {props => <SmurfForm 
        addSmurfHandler = {this.addSmurf} 
        handleInputChange = {this.inputChange}
        name = {this.state.name}
        age = {this.state.age}
        height = {this.state.height}/>} />

        <Route exact path = '/smurfs' render = {props => 
        <Smurfs {...props} 
        smurfs={this.state.smurfs} 
        deleteSmurfHandler = {this.deleteSmurf}
        showUpdateModalHandler = {this.toggleUpdateModal}
        />
        } />

        <UpdateModal isUpdateActive = {this.state.updateModalActive}
          hideUpdateModalHandler ={this.toggleUpdateModal} />

      </div>
    );
  }
}

export default App;
