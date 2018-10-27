import React, {Component} from 'react';
import {BrowserRouter as Route, NavLink} from "react-router-dom";


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(response => {
      this.setState(() => ({smurfs: response.data}));
    }).catch(error => {
      console.error('Server Error', error);
    });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
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
            <NavLink to="/avengers" activeClassName="activeNavButton">
              Smurfs
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Smurfs} />
          <Route exact path="/smurfform" render={props => ( <SmurfForm {...props} smurf={this.state.smurfs} /> )} />


      </div>
    );
  }
}
export default App;
