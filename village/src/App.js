// react
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Dependencies
import axios from 'axios';

// Components
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import EditSmurfForm from './components/EditSmurfForm';
import MainPage from './components/MainPage';

// Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs/')
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }

  handleNewSmurf = newSmurf => {
    axios
    .post('http://localhost:3333/smurfs/', newSmurf)
    .then(res => this.setState({
      smurfs: res.data
    }))
    .catch(err => console.log(err))
  }

  deleteSmurf = id => e => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }

  handleEditedSmurf = editedSmurf => {
    const id = editedSmurf.id;

    axios
      .put(`http://localhost:3333/smurfs/${id}`, editedSmurf)
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <Route 
          path="/" 
          component={Header} 
        />

        <Route 
          exact path="/" 
          component={MainPage} 
        />

        <Route 
          path="/smurf-form" 
          render={props => <SmurfForm {...props} handleNewSmurf={this.handleNewSmurf} />
          } 
        />

        <Route 
          path="/smurfs" 
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          } 
        />

        <Route 
          path="/editsmurf/:id" 
          render={props => <EditSmurfForm {...props} handleEditedSmurf={this.handleEditedSmurf} />
          } 
        />
      </div>
    );
  }
}

export default App;
