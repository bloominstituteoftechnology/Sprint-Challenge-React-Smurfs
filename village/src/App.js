import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

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
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <NavLink to='/'>Smurfs</NavLink>
          &nbsp;
          <NavLink to='smurf-form'>Add Smurf</NavLink>
        </nav>
        <Route
          exact
          path='/smurf-form'
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
        <Route
          exact
          path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
