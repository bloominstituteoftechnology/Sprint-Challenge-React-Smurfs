import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Smurf from './components/Smurf';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [{
        name: '',
        age: '',
        height: ''
      }]
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      console.log('Smurfed!', err);
    })
  }

  // deleteSmurf = smurfId => {
  //   return axios.delete(`http//localhost:3333/smurfs/${smurfId}`)
  //   .then(response => this.setState({ smurfs: response.data}));
  // }

  


  render() {
    return (
      <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink to="/smurfs" activeClassName="activeNavButton">
            The Village
          </NavLink>
        </li>
        <li>
          <NavLink to="/smurf-form" activeClassName="activeNavButton">
            Add New
          </NavLink>
        </li>
      </ul>


      <Route exact path ="/" 
        component={Header}
      />
        
        <Route exact path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />

          <Route path="/smurf-form" 
        render={props => (
          <SmurfForm
            {...props} />
        )}
      />

      <Route 
        path="/smurfs/:smurfId"
        render={props => (
          <Smurf
            {...props}            
          />
        )}
      />
      </div>
    );
  }
}

export default withRouter(App);
