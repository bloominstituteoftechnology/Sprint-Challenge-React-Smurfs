import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  updateData = newData => {
    this.setState({
      smurfs: newData
    });
  };

  deleteSmurf = (id) => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response.data);
      console.log(this.state);
      
      this.setState({ smurfs: response.data });
      //response.data.map((e, i) => (e.id = i+1));
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response.data);
        
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          path="/smurfs-form"
          render={props => <SmurfForm updateData={this.updateData} />}
        />
        <Route
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>}
        />
      </div>
    );
  }
}

export default App;
