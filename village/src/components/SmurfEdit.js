import React, { Component } from "react";

class EditSmurf extends Component {
  submitHandler = event => {
    event.preventDefault();
    this.props.editSmurf(this.props.match.params.id,
        this.props.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.props.handleChange}
            placeholder="Enter Updated Name"
            value={this.props.state.name}
            name="name"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="Enter Updated Age"
            value={this.props.state.age}
            name="age"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="Enter Updated Height"
            value={this.props.state.height}
            name="height"
          />
          <button type="submit">Edit this Smurf</button>
        </form>
      </div>
    );
  }
}

export default EditSmurf;