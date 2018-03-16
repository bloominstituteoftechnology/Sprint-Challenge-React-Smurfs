import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.updateID = this.updateID.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    axios.post('http://localhost:3333/smurfs', { name, age, height });

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  updateSmurf(event) {
    event.preventDefault();
    const { name, age, height, id } = this.state;
    axios.put(`http://localhost:3333/smurfs/${id}`, { name, age, height, id });

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  deleteSmurf(event) {
    event.preventDefault();
    const id = this.state.id;
    axios.delete(`http://localhost:3333/smurfs/${id}`, { id });

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
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

  updateID(event) {
    this.setState({
      id: event.target.value
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
          <input
            onChange={this.updateID}
            placeholder="id"
            value={this.state.id}
          />
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
          <button type="submit" onClick={this.updateSmurf}>Update Smurf</button>
          <button type="submit" onClick={this.deleteSmurf}>Delete Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
