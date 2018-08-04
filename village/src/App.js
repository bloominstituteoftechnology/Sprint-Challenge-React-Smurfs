import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };
  deleteSmurf = event => {
    const smurfId = event.target.dataset.id;
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        this.setState({ smurfs: response.data });
        this.props.history.push('/smurfs');
      })
      .catch(err => console.error(err));
  };
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Header} />
        <Route
          path='/smurfs'
          render={props => (
            <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
          )}
        />
        <Route
          path='/smurfs'
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path='/smurf/:id'
          render={props => <Smurf {...props} deleteSmurf={this.deleteSmurf} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
