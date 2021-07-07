import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import SmurfForm from './components/SmurfForm';


import Smurfs from './components/Smurfs';
import Home from './components/home'
import SmurfHeader from './components/smurfHeader'
import SmurfProfile from './components/SmurfProfile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      props: this.props,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  deleteFriendHandler = id =>{
    return() =>{
      axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
        
      })
      .catch(err => {
        console.log("IN CATCH", err);
      });
  }
}
  componentDidMount (){
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      console.log("IN CATCH", err);
    });
  }
  render() {
    return (
       <div className="container">
       <nav className='nav nav-pills nav-justified'>
          <NavLink exact activeClassName="selected" className="nav-item nav-link " to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link " to="/smurfs">
          Smurfs Village
          </NavLink>
        </nav>
      <Route exact path="/" component={Home} />
      <Route exact
          path="/smurfs"
          render={() => <SmurfHeader />} />
      <Route exact
          path="/smurfs"
          render={() => <SmurfForm smurfs={this.state.smurfs}/>} />
            
      <Route exact
          path="/smurfs"
          render={() => <Smurfs 
            smurfs={this.state.smurfs}
            deleteFriendHandler ={this.deleteFriendHandler}
          />} />
       <Route
       path="/smurfs/:id"
       render={props => 
         <SmurfProfile  
         {...props} smurfs={this.state.smurfs}
         deleteFriendHandler ={this.deleteFriendHandler}
         />
       }
       />

     
        </div>
    );
  }

}

export default App;
