import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SingleSmurf from './components/SingleSmurf';
import { EventEmitter } from './events';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
    EventEmitter.subscribe('addSmurf', (newSmurf) => this.addSmurf(newSmurf));
    EventEmitter.subscribe('deleteSmurf', (id) => this.deleteSmurf(id));
    EventEmitter.subscribe('updateSmurf', (editedSmurf) => this.updateSmurf(editedSmurf));
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data});
      })
      .catch(err => {
        console.error('Error retrieving smurfs', err);
      })
  }
  
  addSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.error('Error adding smurf', err);
      })
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.error('Error deleting smurf', err);
      })
  }

  updateSmurf = editedSmurf => {
    axios
      .put(`http://localhost:3333/smurfs/${editedSmurf.id}`, editedSmurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.error('Error updating smurf', err);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink className="nav-link" to='/'>View Smurfs</NavLink>
          <NavLink className="nav-link" to='/smurf-form'>Add Smurf</NavLink>
        </div>
        <Route path='/smurf-form' component={SmurfForm} />
        <Route path='/smurf/:id' render={ (props) => <SingleSmurf {...props } />}/>
        <Route exact path='/' render={ (props) => <Smurfs {...props} smurfs={this.state.smurfs}/> } />
      </div>
    );
  }
}

export default App;
