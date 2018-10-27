import React, { Component } from 'react';
import axios from 'axios';

class EditSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      height: '',
      id: 0
    };
  }

  componentDidMount() {
    this.setState({
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height,
        id: this.props.smurf.id
    });
  }

  editSmurf = event => {
    event.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${this.state.id}`, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(res => {
      console.log(res.status);
      this.props.history.push('/smurf');
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default EditSmurfForm;
