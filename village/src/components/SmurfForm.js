import React, { Component } from 'react';

class SmurfForm extends Component {
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

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.profile);
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
          <button onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
