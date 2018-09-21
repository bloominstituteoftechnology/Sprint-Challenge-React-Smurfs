import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    console.log("adding smurf");
    // add code to create the smurf using the api

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        console.log("Post response", response);
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(error => console.log(error));

    // this.setState({
    //   name: "",
    //   age: "",
    //   height: ""
    // });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleDelete = event => {
  //   event.preventDefault();

  //   axios
  //     .delete("http://localhost:3333/smurfs")
  //     .then(response => {
  //       this.setState({ smurf: null });
  //       this.props.handleUpdateSmurfs(response.data, Number(this.id));
  //       this.props.history.push("/");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <button type="submit" onClick={this.addSmurf}>
            Add to the village
          </button>
          <button onClick={this.handleDelete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
