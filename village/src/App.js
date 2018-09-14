import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

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
    axios.get('http://localhost:3333/smurfs', this.state.smurfs)
    .then(response => this.setState({smurfs: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route path='/newsmurf' component={SmurfForm} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
