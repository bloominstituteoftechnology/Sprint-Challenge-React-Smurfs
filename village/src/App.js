import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.


  getSmurfs() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(smurfs => this.setState({ smurfs: smurfs.data }))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getSmurfs();
  }

  // componentDidUpdate(prevState){
  //   if(prevState.match.params !== this.match.params){
  //     this.getSmurfs();
  //   }
  // }


  render() {
    // const smurfs = this.state.smurfs;
    return (
      <Router>
        <div className="App">
          <Route path='/SmurfForm' render={() => <SmurfForm />} />
          <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
          {/* <Smurfs smurfs={this.state.smurfs} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
