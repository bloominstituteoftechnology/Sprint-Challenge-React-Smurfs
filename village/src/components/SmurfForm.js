import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: '',
      age: '',
      height: '',
      id: '',
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.isEditing !== prevProps.isEditing && this.props.isEditing === true){
      let smurf = this.props.getSmurf(this.props.editingID);
      this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        isEditing: true,
        id: this.props.editingID,
      });
    } else if(this.props.isEditing !== prevProps.isEditing && this.props.isEditing === false) {
      this.setState({
        isEditing: false,
        name: '',
        age: '',
        height: '',
        id: '',
      })
    }
  }

  addSmurf = event => {
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: this.state.height
    })
      .then(res => this.props.update({smurfs: res.data}))
      .catch(err => console.log(err));
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurf = event => {
    event.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${this.state.id}`, {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: this.state.height,
    })
      .then(res => {
        this.props.update({smurfs: res.data, isEditing: false});
      })
      .catch(err => console.log(err));
    this.setState({
      name: '',
      age: '',
      height: '',
      isEditing: false,
      id: '',
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.isEditing ?
      this.updateSmurf(event) :
      this.addSmurf(event);
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
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
          {this.state.isEditing ?
            <button type="submit">Update smurf</button> :
            <button type="submit">Add to the village</button>
          }
        </form>
      </div>
    );
  }
}

export default SmurfForm;
