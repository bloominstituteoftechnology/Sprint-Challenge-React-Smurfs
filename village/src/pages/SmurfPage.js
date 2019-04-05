import React, { Component } from 'react';
import axios from 'axios';
export default class SmurfPage extends Component {
  constructor(state) {
    super(state);
    this.state = {
      smurfs: [],
      id: state.match.params.id,
      smurf: {}
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => res.data)
      .then(smurfs => smurfs.filter(smurf => smurf.id == this.state.id))
      .then(smurf => this.setState(smurf[0]));
  }

  deleteMe = event => {
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.state.id}`);
  };

  render() {
    const SmurfC = () => (
      <div>
        <h4>{this.state.name}</h4>
        <p>{this.state.smurf.age}</p>
        <p>{this.state.smurf.height}</p>
      </div>
    );
    return (
      <div>
        <h4>{this.state.name}</h4>
        <p>{this.state.age}</p>
        <p>{this.state.height}</p>
        <form onSubmit={this.deleteMe}>
          <button type="submit">delete</button>
        </form>
      </div>
    );
  }
}
