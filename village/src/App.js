import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
const axios = require("axios")

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (       

      <div className="App">
      <Switch>            
        <Route exact path="/" component={Header} />
        <Route path="/smurfs" render={props => <div> <SmurfForm /> <Smurfs smurfs={this.state.smurfs}/> </div>}/>
      </Switch> {/* I could not for the life of me figure out how to mount App properly.  I ended up mounting App in the Index inside of the Router and then ended up using a switch here.  Apparently, this is how you can nest components.*/}
      
      </div>
    );
  }
}

export default App;
