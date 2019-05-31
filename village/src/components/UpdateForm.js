//updateForm
import React, { Component } from 'react';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
      name: '',
      age: '',
      height: ''
    }
    };
  }

  updateSmurf = e =>{
    this.props.updateSmurf('72', this.state.profile);
  }

  handleInputChange = e => {
    this.setState({profile: { ...this.state.profile, [e.target.name]: e.target.value}});
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
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
          <button onClick={this.updateSmurf}>Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
