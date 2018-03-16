import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };

    this.getSmurfs = this.getSmurfs.bind(this);
    this.delete = this.delete.bind(this);
  }
  getSmurfs() {
    axios.get("http://localhost:3333/smurfs").then(response => {
      console.log("Get: ", response);

      this.setState({ smurfs: response.data });
    });
  }
  delete(id) {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(response => {
      console.log("Delete: ", response);
      this.getSmurfs();
    });
  }
  componentDidMount() {
    this.getSmurfs();
  }

  render() {
    return (
      <Container className="App my-5">
        <SmurfForm get={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} delete={this.delete} />
      </Container>
    );
  }
}

export default App;
