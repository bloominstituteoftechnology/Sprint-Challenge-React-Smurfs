import React, { Component } from 'react';

class EditSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
      id: null
    };
  }
  componentDidMount() {
    const myId = this.props.match.params.id;
    const singlesmurf = this.props.smurfs.find(
      smurf => smurf.id === Number(myId)
    );
    this.setState({
      name: singlesmurf.name,
      age: singlesmurf.age,
      height: singlesmurf.height,
      id: singlesmurf.id
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editSubmit = e => {
    e.preventDefault();
    this.props.history.goBack();
    this.props.handleEdit(this.state.id, this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.editSubmit}>
          <input
            type="text"
            name="name"
            placeholder="edit name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="edit age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="edit height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <button type="submit" onSubmit={this.editSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditSmurf;
