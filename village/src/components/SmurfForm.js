import React, { Component } from 'react';

class SmurfForm extends Component {


  submitHandler = event => {
    event.preventDefault();
    this.props.addSmurf(this.props.state);
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.props.handleChange}
            placeholder="name"
            value={this.props.state.name}
            name="name"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="age"
            value={this.props.state.age}
            name="age"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="height"
            value={this.props.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
