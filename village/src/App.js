import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


import './components/Nav/Nav.css'
import NavWrapper from './components/Nav/NavWrapper';
import SubNavContainer from './components/Nav/SubNavContainer';
import menuData from "./components/Nav/menuData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      menu: []
    };
  }

  componentWillMount() {
    this.setState({ menu: menuData.data });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" render={ (props) => <NavWrapper {...props} menuData={this.state.menu}/> } />

        <Route exact path="/" component={Smurfs} />

        {/* <SmurfForm /> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
