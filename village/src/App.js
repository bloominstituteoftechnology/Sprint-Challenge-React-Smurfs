import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from "axios";

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
        console.log(response.data);
        this.setState({
          smurfs: response.data
        });
      });
  }
  //
  // addNewSmurf = () => {
  //   const newSmurf = {
  //     name: "Test",
  //     age: 1,
  //     height: "1cm"
  //   };
  //
  //   // this.setState({
  //   //   friends: response.data
  //   // });
  //
  //   axios
  //     .post("http://localhost:3333/smurfs", newSmurf)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({
  //         smurfs: response.data
  //       });
  //     });
  // };
  //
  // deleteSmurf = id => {
  //   axios
  //     .delete("http://localhost:5000/smurfs/" + id)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({
  //         smurfs: response.data
  //       });
  //     });
  // };
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
