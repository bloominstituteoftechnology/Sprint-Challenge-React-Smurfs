import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import '../App.css';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs:[props.smurfs],
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const NAME = this.state.name;
    const AGE = this.state.age;
    const HEIGHT = this.state.height;

    axios.post("http://localhost:3333/smurfs",{name:NAME,age:AGE,height:HEIGHT})
    .then (response =>
    this.setState({
      smurfs: response.data
    }),
    window.location.reload())
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input className='input'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input className='input'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input className='input'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className='button' type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
