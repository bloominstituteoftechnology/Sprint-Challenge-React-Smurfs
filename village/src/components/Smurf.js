import React from 'react';
import '../App.css';
import axios from 'axios';
import Form from './Form';

class Smurf extends React.Component {
  state = {
    isEditing: false,
    smurf: null,
    name: '',
    age: '',
    height: ''
  }

  componentWillMount() {
    axios
      .get(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ smurf: response.data,
                        name: response.data.name,
                        age: response.data.age,
                        height: response.data.height });
      })
      .catch(error => console.log(error));
  }

  toggleEditMode = e => {
    e.preventDefault();

    if (this.state.name === "") {
      axios
        .get(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
        .then(response => {
          this.setState({ name: response.data.name,
                          age: response.data.age,
                          height: response.data.height });
        })
        .catch(error => console.log(error));
    }

    this.setState({ isEditing: true });
  }

  handleEditCancel = e => {
    e.preventDefault();

    this.setState({ isEditing: false });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditSmurf = e => {
    e.preventDefault();

    axios
      .put(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then(response => {
        const smurf = response.data.find(smurf => smurf.id === Number(this.props.match.params.id));
        this.setState({ isEditing: false, smurf });
      })
      .catch(error => console.log(error));
  }

  handleDelete = e => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ friend: null });
        this.props.handleUpdateSmurfs(response.data, Number(this.props.match.params.id));
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    if (!this.state.smurf) {
      return (
        <div>Loading smurf...</div>
      )
    }

    if (this.state.isEditing) {
      return (
        <Form name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              handleInputChange={this.handleInputChange}
              handleCancel={this.handleEditCancel}
              handleSmurfSubmit={this.handleEditSmurf}/>
      )
    }

    return (
      <div>
        <h3>{this.state.name}</h3>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} smurf years old</p>
        <button onClick={this.toggleEditMode}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
