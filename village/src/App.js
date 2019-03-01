import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink} from 'react-router-dom';
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

  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then( response => {
        this.setState(() => ({ smurfs: response.data }))
      })

      .catch( error => {
        console.error('Server Error', error);
      });
  }

  postSmurf = (event, smurf) => {
    event.preventDefault();
    axios 
      .post('http://localhost:3333/smurfs', smurf)
      .then( response => {
        this.setState({
          smurfs: response.data
        })
      })

      .catch( error => console.log("uh oh", error))
  }


  render() {
    return (
      <div className="App">

      <div className = "nav-bar">
          <NavLink to = "/smurf-form" className = "nav-links" activeClassName = "activeLink" exact> Smurf Form </NavLink>
          <NavLink to = "/" className = "nav-links" activeClassName = "activeLink" exact> See the Smurfs </NavLink>
      </div>


        {/* <SmurfForm postSmurf = {this.postSmurf}/>
        <Smurfs smurfs={this.state.smurfs} /> */}

        <Route exact path = "/smurf-form" render = { () => <SmurfForm postSmurf = {this.postSmurf} /> } />
        <Route exact path = "/" render = { () => <Smurfs smurfs = {this.state.smurfs}/> } />
      </div>
    );
  }
}

export default App;
