import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  componentDidMount = () => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs });
      })
      .catch(err => console.log(err))
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/smurfs" render={props => <div> <Smurfs smurfs={this.state.smurfs} /> <SmurfForm /></div>}/>
      </Switch> 
      </div>
    );
  }
}

export default App;