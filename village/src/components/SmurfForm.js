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
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  // Add a post request here
  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    // Make a copy of the added smurf
    const smurf = this.state;
    
    // do a post request, sending the smurf object
    axios.post(`http://localhost:3333/smurfs`, smurf).then(response => {
      console.log(response.data);
      // reset the state to empty smurf
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }).catch(error => {
      // TBD erro handling
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;