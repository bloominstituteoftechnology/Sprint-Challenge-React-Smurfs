import React, { Component } from 'react';
import axios from 'axios';

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      name: '',
      age: '',
      height: ''
    };
  }
  toggleUpdateButton = () => {
    this.setState({ update: !this.state.update });
  };

  handleInputchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { id } = this.props.smurf;
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(res => res.data)
      .then(() => this.props.updateSmurfs())
      .catch(err => console.log(err));
    this.setState({ name: '', age: '', height: '', update: false });
  };

  render() {
    let { smurf } = this.props;

    if (!this.state.update) {
      return (
        <button onClick={this.toggleUpdateButton}>Update {smurf.name}</button>
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            placeholder="Name"
            name="name"
            onChange={this.handleInputchange}
          />
          <input
            value={this.state.age}
            placeholder="Age"
            name="age"
            onChange={this.handleInputchange}
          />
          <input
            value={this.state.height}
            placeholder="Height"
            name="height"
            onChange={this.handleInputchange}
          />
          <button type="submit">Update</button>
        </form>
        <button onClick={this.toggleUpdateButton}>Cancel</button>
      </div>
    );
  }
}

export default UpdateSmurf;
