import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      // console.log(response);
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err));
  }

  addSmurf = (data) => {
    axios.post('http://localhost:3333/smurfs', data)
    .then(response => {console.log(response)
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err))
  }
  
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <SmurfForm addSmurf={this.addSmurf}/>
        <Route exact path='/' component={Home} />
        <Route path='/smurfs' render={() => <Smurfs smurfs={this.state.smurfs} />} />
        
         
      </div>
    );
  }
}

export default App;
