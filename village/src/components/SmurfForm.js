import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurfHandler = event => {
    event.preventDefault();
    const smurf = this.props.smurfs.filter(smurf => smurf.name === this.state.name)
    const id = smurf[0].id;

    this.props.updateSmurf(this.state, id);

    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
          <button type="submit" onClick={this.updateSmurfHandler}>Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
