import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

const url = 'http://localhost:3333/'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // Create
  addNewSmurf = data => {
    axios
      .post(`${url}smurfs`, data)
      .then(resp => 
          this.setState({
            smurfs: resp.data
          })
        )
      .catch(err => console.log(err))
  }

  // Read
  componentDidMount = () => {
    axios
      .get(`${url}smurfs`)
      .then(resp => 
          this.setState({
            smurfs: resp.data
          })
        )
      .catch(err => console.log(err))
  }

  // Update
  editSmurf = (data, id) => {
    axios
      .put(`${url}smurfs/${id}`, data)
      .then(resp => 
          this.setState({
            smurfs: resp.data
          })
        )
      .catch(err => console.log(err))
  }

  // Delete
  deleteSmurf = id => {
    axios
      .delete(`${url}smurfs/${id}`)
      .then(resp => 
          this.setState({
            smurfs: resp.data
          })
        )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/smurf-form'> Add New Smurf</NavLink>
        </nav>

        <Route exact path='/smurf-form' render={props => <SmurfForm {...props} create={this.addNewSmurf}/>}/>
        <Route exact path='/smurf-form/:smurfId' render={props => <SmurfForm {...props} update={this.editSmurf} edit/>}/>
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
        <Route exact path='/smurf/:smurfId' render={props => <Smurf {...props} smurf={this.state.smurfs} delete={this.deleteSmurf}/>}/>
      </div>
    );
  }
}

export default App;
