import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

export default class SingleSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs/`)
      .then(response =>
        this.setState({
          smurf: response.data.find(
            smurf => `${smurf.id}` === this.props.match.params.id
          ),
        })
      )
      .catch(err => console.log(err));

    // const smurf = this.props.smurfs.find(
    //   smurf => `${smurf.id}` === this.props.match.params.id
    // );
    // this.setState({ smurf });
  }

  editSmurf = e => {
    e.preventDefault();
    const id = this.state.smurf.id;
    this.props.editSmurf(id, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
    this.setState({
      name: '',
      age: '',
      height: '',
    });
    this.props.history.push('/');
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.editSmurf}>
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
          <button type="submit">Edit Smurf</button>
        </form>

        {/* Checking for state here will prevent
        TypeError: Cannot read property 'id' of undefined
        when using direct link http://localhost:3000/smurf/:id */}

        {this.state.smurf ? (
          <Smurf
            id={this.state.smurf.id}
            name={this.state.smurf.name}
            age={this.state.smurf.age}
            height={this.state.smurf.height}
            goodbyeSmurf={this.props.goodbyeSmurf}
          />
        ) : null}
      </div>
    );
  }
}
