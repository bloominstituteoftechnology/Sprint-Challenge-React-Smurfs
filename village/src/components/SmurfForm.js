import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", age: "", height: "" });
    // add code to create the smurf using the api

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.props.edit) {
      this.props.editSmurf(this.props.match.params.id, this.state);
    } else {
      this.props.add(this.state);
    }
    this.setState({ name: "", age: "", height: "" });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitHandler}>
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
          <button type="submit">
            {this.props.edit ? "Edit Smurf" : "Add to the Village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
