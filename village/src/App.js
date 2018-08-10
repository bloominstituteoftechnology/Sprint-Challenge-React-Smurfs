import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };


  }
  componentDidMount(){
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log('this is app axios.get', response.data)
      this.setState(() => ({smurfs: response.data
      }))
    })
  }


  render() {
    console.log('this is app state', this.state.smurfs)

    return (
      <div className="app">
         <div className="navbar">
           <NavLink className="navlink" exact to="/">Home</NavLink>
           <NavLink className="navlink" to="/smurfs">The Village</NavLink>
         </div>
        <Route exact path="/" component={Header}/>
        <Route path="/smurfs" component={SmurfForm}/>
        <Route path="/smurfs"  render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
      </div>
    );
  }
}

export default App;
