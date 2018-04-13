import React, { Component } from 'react';
import axios from 'axios';

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
    // event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {};
    if (this.state.name !== '') newSmurf['name'] = this.state.name;
    if (this.state.age !== '') newSmurf['age'] = this.state.age;
    if (this.state.height !== '') newSmurf['height'] = this.state.height;

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {this.props.getSmurfs()})
      .catch(err => console.log(err));
      this.setState({ name: '', age: '', height: ''});
  }

  handleInputChange = e => {
    console.log(e.target.value);
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
        </form>
      </div>
    );
  }
}

export default SmurfForm;
