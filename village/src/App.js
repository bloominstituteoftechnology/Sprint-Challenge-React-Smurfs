import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {BrowserRouter as Router}  from 'react-router-dom'
import {Link,Route}  from 'react-router-dom'
import Home from './components/Home'

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

  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then ( res => {
      this.setState({
        smurfs:res.data
      })
    }).catch (err => {
      console.log (err)
    })
  }
  
  updateState = (postResponse) => {
    this.setState({smurfs:postResponse})
  };

  render() {
    return (
      <Router>          
        <div className="App">
          <Route exact path ='/' component={Home}/>            
          <Route path ='/smurfs' render={() => <SmurfForm updateState={this.updateState}/> }/>
          <Route path ='/smurfs' render={() => <Smurfs smurfs={this.state.smurfs} />}/>  
        </div>        
      </Router>
    );
  }
}

export default App;
