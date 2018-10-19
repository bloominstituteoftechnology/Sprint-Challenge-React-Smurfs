import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, NavLink } from "react-router-dom"
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from "./components/Home"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState({smurfs: res.data}))
    .catch(err => console.log(err))
  }
  
 

  render() {
    return (
      <div className="App">
        <NavLink exact to="/" activeClassName="form-link">Home</NavLink>
        <NavLink to="/smurfs" activeClassName="form-link">Smurfs</NavLink>
        <NavLink to="/smurf-form" activeClassName="form-link">Form</NavLink>
        <Route exact path ="/" component={Home} />
        <Route  path ="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
        <Route exact path ="/smurf-form" component={SmurfForm} />
        {/* <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;








  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.