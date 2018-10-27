import React, { Component } from 'react';
import axios from 'axios';
import {NavLink, Route} from 'react-router-dom';


import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import styles from './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
        .then(response =>{
          this.setState({
            smurfs: response.data,
          })
        })
  }
  addSmurf = newSmurf => {
    axios 
      .post('http://localhost:3333/smurfs', newSmurf)
        .then(response =>{
          this.setState({
            smurfs: response.data,
          })
        })
  }
  deleteSmurf = (id) => {
    axios 
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response =>{
          this.setState({
            smurfs: response.data,
          })
        })
  }   
  render() {
    return (
      <div className="app-body">
        <div className = 'nav-bar'>
          <NavLink exact to = '/' className = 'link'>Home</NavLink>
          <NavLink to = '/smurf-form' className = 'link'>Smurf Form</NavLink>
        </div>
        <Route path = '/smurf-form' render = {() => <SmurfForm addSmurf = {this.addSmurf}/>}/>
        <Route exact path = '/' render ={() => <Smurfs smurfs={this.state.smurfs} deleteSmurf = {this.deleteSmurf}/>}/>
      </div>
    );
  }
}

export default App;
