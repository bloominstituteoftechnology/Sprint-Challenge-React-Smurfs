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
  }

  addSmurf = event => {
    event.preventDefault();
    const smurf = { ...this.state }
    const url = 'http://localhost:3333/smurfs';
    

    axios.post(url, smurf)
      .then(res => {
        this.setState({
          smurf: res.data
        })
        this.props.history.push("/");
        window.location.reload();
      })
      .catch(err => console.log(err));
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">
          Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
