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


  componentDidMount() {
    this.addSmurf()
  }


  addSmurf(event) {
    // add code to create the smurf using the api
    if (this.state.name === undefined || this.state.name.length === 0) return;
    const { name, age, height } = this.state;
    axios.post('http://localhost:3333/smurfs', {
      name: name,
      age: age,
      height: height
    })
    .then((response) => {
      this.setState({
        name: '',
        age: '',
        height:''
      })
    })
    .catch((error) => {
      console.error('Server Error', error)
    })
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
            type="text"
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            type="number"
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            type="number"
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