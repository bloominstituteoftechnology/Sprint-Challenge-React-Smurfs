import React, { Component } from 'react';
import axios from 'axios';

class SmurfUpdate extends Component {

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

  addSmurf(event) {
    // add code to create the smurf using the api
    axios.put(`http://localhost:3333/smurfs/${this.props.id}`, {
        id: this.props.id,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    }).then(console.log('Smurf changed!'))
    .catch(console.log('Smurf change failed!'));

    this.setState({
      name: '',
      age: '',
      height: ''
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

  deleteSmurf() {
    console.log('deleting');
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.id}`, {
        id: this.props.id
      }).then(console.log('Deleted!'));
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
          <button type="submit">Update</button>
          <button onClick={() => this.deleteSmurf()}>Delete</button>
        </form>
      </div>
    );
  }
}

export default SmurfUpdate;