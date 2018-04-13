import React, { Component } from "react";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import axios from "axios";

class Pathfinder extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
    };
  }

  // Mount
  componentDidMount() {
    this.getSmurfs();
  }

  // Get Smurfs list
  getSmurfs = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // recall list from client-side, rather than using Get
  refreshAfterAddSmurf = (smurfs) => {
    this.setState({ smurfs });
  }

  deleteSmurf = id => {
    axios
      .delete(`http//localhost:3333/smurfs/${id}`)
      .then(response => {
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* create(Post) field */}
        <SmurfForm refreshAfterAddSmurf={this.refreshAfterAddSmurf} getSmurfs={this.getSmurfs} />
        {/* read(Get) mapping of*/}
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    );
  }
}

export default Pathfinder;
