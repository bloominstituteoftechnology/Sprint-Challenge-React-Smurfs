import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import EachSmurf from './components/EachSmurf';
import {Route, Link} from 'react-router-dom';

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

 componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

handleSetData = data => this.setState({ smurfs: data });


  render() {
    return (
      <div className="App">   
	 <Link to="/smurfs"><Header /></Link>   
	 <Route exact path="/smurfs" render={(props) => <Smurfs {...props} handleSetData={this.handleSetData} smurfs={this.state.smurfs} />} />
	 <Route  path="/smurfs/:id"  render={(props) => <EachSmurf {...props} />} />  
      </div>
    );
  }
}

export default App;
