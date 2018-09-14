import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      // name: '',
      // age: '',
      // height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        // console.log(response.data);
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // addSmurf = event => {
  //       event.preventDefault();
  //       // add code to create the smurf using the api
  //       // const id = (this.state.smurfs[this.state.smurfs.length - 1].id + 1)
  //       const smurf = {name: this.state.name, age: this.state.age, height: this.state.height};
    
  //       axios
  //         .post('http://localhost:3333/smurfs', smurf)
    
  //         .then(response => 
  //               this.setState({ smurf: response.data, name: '', age: '', height: ''})
  //             )
              
  //         .catch(err => {
  //           console.log(err);
  //         });
    
        // this.setState({
        //   name: '',
        //   age: '',
        //   height: ''
        // });
      // };
    
      // handleInputChange = e => {
      //   this.setState({ [e.target.name]: e.target.value });
      // };

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/smurfs-form" activeClassName="activeNavButton">
              Add Smurf
            </NavLink></li>
        </ul>

       <Route
          exact
          path="/"
          render={props => (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )}
        />
      <Route
          path="/smurfs-form"
          render={props => (
            <SmurfForm 
          name={this.state.name} 
          age={this.state.age} 
          height={this.state.height} 
          addSmurf={this.addSmurf}
          handleInputChange={this.handleInputChange}
        />  
        )}
        />
    
      </div>
    );
  }
}

export default App;
