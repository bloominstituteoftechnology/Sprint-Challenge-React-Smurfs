import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route, Link, NavLink } from 'react-router-dom'

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
      .catch(err => console.log(err));
  }
  stateChangeHandler = (stateFromChild) => {
    this.setState({ smurfs: stateFromChild })
  }

  render() {
    return (
      <div className="App">
        <Route path="/smurf-form" render={props =>(<SmurfForm stateChangeHandler={this.stateChangeHandler}/>)} />
        <Route exact path ="/" render= {props => (<Smurfs smurfs={this.state.smurfs}/>)} />
      </div>
    );
  }
}

export default App;
