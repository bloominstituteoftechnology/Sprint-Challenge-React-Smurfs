import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios
    .post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: this.state.id
    })

    .then(newResponse => {
      console.log('from addSmurf', newResponse)
      this.setState({ 
        name: newResponse.data,
        age: newResponse.data,
        height: newResponse.data
      });
    })
    .catch(err => console.log(err));
}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  delete = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${this.state.id}`)

      .then(newResponse => {
        console.log('from delete', newResponse)
        this.setState({
          name: this.state.name,
          age: this.state.age,
          height: this.state.height,
          id: this.state.id
        })
      })
  }

  update = (event, id) => {
    event.preventDefault();
    axios 
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
        id: this.state.id
      })

      .then(newResponse => {
        console.log('from update', newResponse)
        this.setState({
          name: this.state.name,
          age: this.state.age,
          height: this.state.height,
          id: this.state.id
        })
      })
      .catch(err => console.log(err));
  }

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
            placeholder="id"
            value={this.state.id}
            name="id"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
          <button onClick={this.delete} type="submit">Delete</button>
          <button onClick={this.update} type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
