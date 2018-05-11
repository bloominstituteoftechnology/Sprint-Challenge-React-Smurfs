import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
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
  componentDidMount = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res=>
      this.setState({ smurfs : res.data })
    )
    .catch(err=>
      console.log(err) //to-do: display to user message
    )
  }
  refreshSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res=>
      this.setState({ smurfs : res.data })
    )
    .catch(err=>
      console.log(err) //to-do: display to user message
    )
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <SmurfForm refreshSmurf={this.refreshSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
