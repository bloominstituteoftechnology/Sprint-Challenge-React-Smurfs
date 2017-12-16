import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions';

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

  addSmurf = (event) => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(smurf);
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }

  updateId = (event) => {
    this.setState({
      id: event.target.value
    });
  }

  handleUpdateSmurf = (event) => {
    event.preventDefault();
    if (!this.state.id) return undefined;
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: this.state.id
    }
    this.props.updateSmurf(smurf);
    this.setState({
      age: '',
      name: '',
      height: '',
      id: ''
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <input
            onChange={this.updateId}
            placeholder="id"
            value={this.state.id}
          />
          <button type="submit">Add to the village</button>
          <button onClick={this.handleUpdateSmurf}>Update to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm);