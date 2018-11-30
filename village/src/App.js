import React, { Component } from 'react';
import axios from 'axios';
import {Route,NavLink} from "react-router-dom";


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

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
        // console.log(response.data);
        this.setState({
          smurfs:response.data
        });
        // console.log(() => ({smurfs:response.data}));
        // const test = () => ({smurfs:response.data})
        // console.log(test())
      })
      .catch(error => console.log(error))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
          <nav className="nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/smurf-form"} >Add Smurf</NavLink>
          </nav>

          <h1 className="heading">Smurf Village</h1>

        <Route exact path={"/"} 
          render={props => 
            (<Smurfs {...props} smurfs={this.state.smurfs} />)}>
        </Route>

        <Route path={"/smurf/:id"} render={props =>(
          <div className="Smurfs"> 
            <Smurf {...props} smurfs={this.state.smurfs}/>
          </div>
          )}/>
        <Route path={"/smurf-form"} render={props =>( <SmurfForm {...props}/> )}/>
      </div>
    );
  }
}

export default App;
