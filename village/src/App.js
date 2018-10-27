import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

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
    //grabbing the server data and rendering them on the screen
    axios
      .get('http://localhost:3333/smurfs')
      .then( response => {
        // console.log(response)
        this.setState({smurfs: response.data})
      })
      .catch( err => console.log(err))
  }

  addSmurf = (smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then( response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then( response => {
        this.setState({smurfs: response.data})
      })
      .catch( err => console.log(err))
  }

  editSmurf = (id, edit) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, edit)
      .then( response => {
        this.setState({smurfs: response.data})
      })
  }

  render() {
    return (
      <div className="App">

        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to= '/smurf-form'>Add Smurf</NavLink>
        </nav>


        <Route path='/smurf-form' render={(props) => 
          <SmurfForm {...props} 
          addSmurf={this.addSmurf} 
          smurfs={this.state.smurfs}/>} 
          />

        <Route exact path='/' render={(props) => 
        <Smurfs {...props} 
        smurfs={this.state.smurfs}
        deleteSmurf={this.deleteSmurf} 
        edit={this.editSmurf}/>}
        />

      </div>
    );
  }
}

export default App;
