import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      // smurf: {
      //   name: "",
      //   age: "", 
      //   height: ""
      // }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({smurfs: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  // addNewSmurf = (e) => {
  //   const smurfsCopy = this.state.smurfs.slice();
  //   const smurfBlank = {
  //     name: "",
  //     age: "", 
  //     height: ""
  //   }
  //   axios
  //     .post("http://localhost:3333/smurfs", smurfsCopy)
  //     .then(response => {
  //       console.log("POST RESPONSE: ", response);
  //       this.setState({smurfs: response.data, smurf: smurfBlank});
  //     })
  //     .catch(error => console.log(error));
  // }

  // handleNewSmurfName = e => {
  //   console.log(e.target.value);
  //   const smurfCopy = this.state.smurf.slice();

  //   this.setState({smurf: {
  //     name:e.target.value,
  //     age: smurfCopy.age,
  //     height: smurfCopy.email
  //   }})
  // }

  // handleNewSmurfAge = e => {
  //   console.log(e.target.value);
  //   const smurfCopy = this.state.smurf.slice();

  //   this.setState({smurf: {
  //     name:smurfCopy.name,
  //     age: e.target.value,
  //     height: smurfCopy.email
  //   }})
  // }
  
  // handleNewSmurfHeight = e => {
  //   console.log(e.target.value);
  //   const smurfCopy = this.state.smurf.slice();

  //   this.setState({smurf: {
  //     name:smurfCopy.name,
  //     age: e.target.value,
  //     height: e.target.value
  //   }})
  // }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Route exact path = "/" component = {Header} />
      {/* <Route exact path = "/smurfs" component = {Smurfs} />
      <Route exact path = "/smurfs" component = {SmurfForm} /> */}
      <Route exact path = "/smurfs" render ={() => 
        <div>
          <Header />
          <SmurfForm />
          <Smurfs 
            smurfs = {this.state.smurfs}/>
        </div>
        } />

        {/* // <SmurfForm  */}
        {/* //   handleNewSmurfName = {this.handleSmurfName}
        //   handleNewSmurfAge = {this.handleNewSmurfAge}
        //   handleNewSmurfHeight = {this.handleNewSmurfHeight}
        //   addNewSmurf = {this.addNewSmurf}
        //   smurfs = {this.state.smurfs}
        // />
        // <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
