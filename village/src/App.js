import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

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
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        console.log(res.status);
        this.setState({
          smurfs: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={SmurfForm} />
        <Route exact path='/' render={props => <Smurfs smurfs={this.state.smurfs} {...props} />} />
      </div>
    );
  }
}

export default App;
