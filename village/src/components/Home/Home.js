import React, { Component } from "react";
import SmurfForm from "../SmurfForm";
import Smurfs from "../Smurfs";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount = () => {
    axios.get("/smurfs").then(res => {
      this.setState({
        smurfs: res.data
      });
    });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default Home;
