import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import axios from 'axios';


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
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data});
        console.log(this.state, "smurfs");
      })
  }


  
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/village" render={(props) => <Smurfs smurfs={this.state.smurfs}/>} />
          <Route path="/village/:id" component={Smurf} />
        </Switch>
      )
  }
}


export default App;