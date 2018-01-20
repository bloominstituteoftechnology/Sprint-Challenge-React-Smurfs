import React, { Component } from 'react';
import axios from 'axios';

class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
    this.editSmurf = this.editSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  editSmurf(event) {
    event.preventDefault();
    // console.log(this.props);

    const stream = `http://localhost:3333/smurfs/${this.props.id}`;
    // console.log(this.state);

    axios
      .put(stream, this.state)
      .then(response => {
        // this.setState({ smurfs: response.data });
        this.props.cancelEditSmurf();
        this.props.loadVillage();
      })
      .catch(error => {
        console.error(error);
      });

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updateAge(event) {
    this.setState({
      age: Number(event.target.value),
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value,
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.editSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Finish editing smurf</button>
        </form>
      </div>
    );
  }
}

export default EditSmurf;
