import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import EditSmurf from './components/EditSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err))
  }

  addSmurf = data => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err))
  }

  removeSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then (response => {
        console.log(response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err))
  } 

  editSmurf = (data, id) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, data)
    .then(response => {
      this.setState({
         smurfs: response.data 
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
          <NavLink to="/">Smurf List</NavLink>
        </nav>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurf/:id" render={props => <Smurf {...props} smurfs={this.state.smurfs} removeSmurf={this.removeSmurf} />} />
        <Route exact path="/smurf-edit/:id" render={props => <EditSmurf {...props} editSmurf={this.editSmurf} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
