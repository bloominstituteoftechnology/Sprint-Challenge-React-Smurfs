import React, { Component } from 'react';

class SmurfForm extends Component {
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.changeHandler}
            placeholder="name"
            value={this.props.newSmurf.name}
            name="name"
          />
          <input
            onChange={this.props.changeHandler}
            placeholder="age"
            value={this.props.newSmurf.age}
            name="age"
          />
          <input
            onChange={this.props.changeHandler}
            placeholder="height"
            value={this.props.newSmurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
