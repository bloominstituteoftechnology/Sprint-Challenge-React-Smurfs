import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
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
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: [...res.data]});
      })
      .catch(err => {
        console.error('Error retrieving smurfs', err);
      })
  }
  
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink className="nav-link" to='/'>View Smurfs</NavLink>
          <NavLink className="nav-link" to='/smurf-form'>Add Smurf</NavLink>
        </div>
        <Route path='/smurf-form'component={SmurfForm} />
        <Route exact path='/' render={ (props) => <Smurfs {...props} smurfs={this.state.smurfs}/> } />
      </div>
    );
  }
}

export default App;
