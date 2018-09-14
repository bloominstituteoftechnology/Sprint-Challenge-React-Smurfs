import React, { Component } from 'react';
import Header from './components/Header';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error('Uh Oh!');
      });
  }

  removeSmurf = id => {
    axios
      .delete(`http://localhost:5000/smurfs/${this.id}`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error('Oh no!', error);
      });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />

        <Route
          exact
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              removeSmurf={this.removeSmurf}
            />
          )}
        />
        <Route exact path="/smurfs" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
