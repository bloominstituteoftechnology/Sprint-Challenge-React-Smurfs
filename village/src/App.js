import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

import axios from 'axios';
import {
  Route,
  NavLink,

} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState(()=>({smurfs: response.data}))
    })
    .catch(error=>
      console.error('server error', error));
  }


  addSmurffy = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({smurfs: res.data})
        // this.props.history.push('/')
      })
      .then(err=>console.log(err))


  };




  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <nav>
        <div className="link">
        <NavLink exact to="/smurf-list">Smurf List</NavLink>
        </div>
        <div className="link">
        <NavLink exact to="/">Home</NavLink>
        </div>

      </nav>
        <Route exact path = "/" render={(props) => <SmurfForm smurfs={this.state.smurfs} addSmurffy={this.addSmurffy} {...props}/>}/>
        <Route exact path = "/smurf-list" render={(props) => <Smurfs smurfs={this.state.smurfs} {...props}/>}/>
      </div>
    );
  }
}

// const AppWithRouter = WithRouter(App);


export default App;
