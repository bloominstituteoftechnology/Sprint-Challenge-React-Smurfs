import React, { Component } from 'react';
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: {}
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = this.state.smurfs;
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      const smurfs = res.data;
      this.setState({ smurfs });
    })
    .catch(err => console.log(err))
    this.setState({
      smurfs: {}
    });
  }

  handleInputChange = e => {
    let newSmurf = this.state.smurfs;
    newSmurf[e.target.name] = e.target.value;
    this.setState({ newSmurf });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <button type="submit" onSubmit={e => this.addSmurf(e)}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
