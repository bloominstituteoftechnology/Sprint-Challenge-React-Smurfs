import React from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.newSmurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.newSmurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
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
