import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      edit: false
    };
  }

  componentDidMount() {
    if (this.props.name && this.props.age && this.props.height) {
      this.getSmurfData(this.props.id);
    }
  }

  getSmurfData = id => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({
        name: response.data.name,
        age: response.data.age,
        height: response.data.height,
        edit: true
      }))
      .catch(err => console.log(err));
  }

  editSmurf = () => {
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height }

    axios
      .put(`http://localhost:3333/smurfs/${this.props.id}`, newSmurf)
      .then(response => {
        this.props.handleSetData(response.data)
        this.props.setEdit(false);
      })
      .catch(err => console.log(err));
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height }
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.props.handleSetData(response.data);
        this.setState({ name: '', age: '', height: '' });
      })
      .catch(err => console.log(err));

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={event => event.preventDefault()}>
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
          <button onClick={this.state.edit ? this.editSmurf : this.addSmurf}>{this.state.edit ? 'Save' : 'Add to the village'}</button>
          <button onClick={() => this.props.history.push('/')} >Back to home!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
