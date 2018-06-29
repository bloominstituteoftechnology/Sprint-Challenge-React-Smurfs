import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header';

const URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  addSmurf = (obj) =>{
    this.setState({smurfs: obj});
  }

  componentDidMount(){
    axios
      .get(URL)
      // .then(response => (console.log(response.data)))
      .then(response => this.setState({smurfs: response.data}))
      .catch(error => console.log(error));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/addSmurf" render={(props) => (
          <SmurfForm {...props} addSmurf={this.addSmurf}/>
        )}>
        </Route>
        <Route path="/smurfs" render={(props) => (
          <Smurfs smurfs={this.state.smurfs} />
        )}>        
        </Route>
        
      </Switch> 
      </div>
    );
  }
}

export default App;
