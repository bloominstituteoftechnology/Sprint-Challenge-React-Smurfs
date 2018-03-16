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
    this.edit = this.edit.bind(this);
    this.addSmurf = this.addSmurf.bind(this);
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
  edit(object, id) {
    // event.preventDefault();
    // console.log("Edit ID: ", event.target);
    axios.put(`http://localhost:3333/smurfs/${id}`, object).then(response => {
      console.log("Edit: ", response);
      this.getSmurfs();
    });
  }
  addSmurf(object, id) {
    // add code to create the smurf using the api
    axios.post("http://localhost:3333/smurfs", object).then(response => {
      console.log("Post: ", response);
      // this.setState({
      //   name: "",
      //   age: "",
      //   height: ""
      // });
      this.getSmurfs();
    });
  }
  componentDidMount() {
    this.getSmurfs();
  }

  render() {
    return (
      <Container className="App my-5">
        <SmurfForm get={this.getSmurfs} submit={this.addSmurf} id={-1} />
        <Smurfs
          smurfs={this.state.smurfs}
          delete={this.delete}
          submit={this.edit}
          get={this.getSmurfs}
        />
      </Container>
    );
  }
}

export default App;
