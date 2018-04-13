import React, { Component } from "react";
import axios from "axios";

import './SmurfForm.css';

export default class SmurfForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        age: "",
        height: ""
      };
  
      this.addSmurf = this.addSmurf.bind(this);
      this.deleteSmurf = this.deleteSmurf.bind(this);
    }
  
    addSmurf = event => {
      event.preventDefault();
      // add code to create the smurf using the api
      axios
        .post("http://localhost:3333/smurfs", {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        })
        .then(() => {
          this.props.getSmurfs();
        });
  
      this.setState({ id: "", name: "", age: "", height: "" });
    };
  
    deleteSmurf(e) {
      e.preventDefault();
      axios.delete("http://localhost:3333/smurfs/${this.state.id}").then(() => {
        this.props.getSmurfs();
      });
  
      this.setState({
        id: "",
        name: "",
        age: "",
        height: ""
      });
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <button className="Smurf-add" type="submit">Add to the village</button>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button className="Smurf-remove" type="button"onClick = {this.deleteSmurf}>Delete</button>
          </form>
        </div>
      );
    }
  }