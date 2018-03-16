import React, { Component } from 'react';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: '',
    };
  }

  render(props) {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            required
            type="text"
            onChange={this.props.updateName}
            placeholder="Enter name"
            value={this.props.name}
          />
          <input
            required
            type="number"
            onChange={this.props.updateAge}
            placeholder="Enter age"
            value={this.props.age}
          />
          <input
            required
            type="number"
            onChange={this.props.updateHeight}
            placeholder="Enter height in cm"
            value={this.props.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;