import React, { Component } from "react";

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      id: ""
    };
  }
  // on mount should prepopulate the smurf details with current
  componentDidMount() {
    this.setState({
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
      id: this.props.id
    });
  }
  // handler for sending smurf details to the parent for pushing to server
  updateSmurf = e => {
    e.preventDefault();
    return this.props.update(this.state);
  };
  // handles all input from form inputs
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="UpdateSmurf">
        <form onSubmit={this.updateSmurf}>
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
          <button type="submit">Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateSmurf;
