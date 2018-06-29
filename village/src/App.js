import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

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
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log('ERR getting all smurfs:', err));
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Header} />
        <Route
          exact
          path="/new"
          render={props => (
            <SmurfForm
              {...props}
              handleUpdate={this.updateSmurfs}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          exact
          path="/village"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
