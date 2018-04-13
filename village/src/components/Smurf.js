import React, { Component } from 'react';
import axios from 'axios';
import UpdateSmurf from './UpdateSmurf';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSmurf: false,
      name: '',
      height: '',
      age: ''
    };
  }

  deleteSmurf = smurfID => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfID}`)
      .then(response => this.props.getSmurfs())
      .catch(error => console.log(error))
  }

  toggleState = () => {
    this.setState({ updateSmurf: !this.state.updateSmurf });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateSmurf = smurfID => {
    const newSmurfInfo = {};
    if (this.state.name !== '') newSmurfInfo['name'] = this.state.name;
    if (this.state.age !== '') newSmurfInfo['age'] = this.state.age;
    if (this.state.height !== '') newSmurfInfo['height'] = this.state.height;

    axios
      .put(`http://localhost:3333/smurfs/${smurfID}`, newSmurfInfo)
      .then(response => {
        this.setState({ name: '', height: '', age: '' });
        this.props.getSmurfs();
        this.toggleState();
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
        <button onClick={() => this.deleteSmurf(this.props.smurf.id)}>Delete</button>
        <button onClick={() => this.toggleState()}>Update</button>
        {this.state.updateSmurf ? (
          <div>
            <input
              type="text"
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name"
            />
            <input
              type="text"
              onChange={this.handleInputChange}
              name="height"
              placeholder="Height"
            />
            <input
              type="text"
              onChange={this.handleInputChange}
              name="age"
              placeholder="Age"
            />
            <button onClick={() => this.updateSmurf(this.props.smurf.id)}>Submit</button>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Smurf;
