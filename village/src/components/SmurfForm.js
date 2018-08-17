import React, { Component } from 'react';
import axios from "axios";


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

    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        this.props.setSmurfData(response.data);
      })
      .catch(error => this.props.setErrorHandler('Error Creating Smurf!'));

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  // editSmurf = (id) => {
  //   const { name, age, height, id } = this.state;
  //   const newSmurf = { name, age, height };
  //   axios.put(`http://localhost:3333/smurfs/${id}`, newSmurf)
  //     .then(response => {
  //       this.setState({
  //         friends: response.data
  //       })
  //     })
  //     .catch(error => {
  //       console.error('Server Error', error);
  //     });
  // }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <button type="submit">Add to the village</button>
        </form>

        {/* <form onSubmit={this.deleteSmurf}>
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
          <button type="submit">Add to the village</button>
        </form> */}
      </div>
    );
  }
}

export default SmurfForm;
