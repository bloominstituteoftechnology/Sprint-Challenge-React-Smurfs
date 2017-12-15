import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf, deleteSmurf } from '../actions';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.updateId = this.updateId.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  updateId(event) {
    this.setState({
      id: event.target.value
    });
  }

  updateSmurf = (event) => {
    event.preventDefault();
    if (!this.state.id) return;
    this.props.updateSmurf(this.state.id);
    this.setState({
        name: '',
        age: '',
        height: '',
        id: ''
    }); 
  };

  deleteSmurf = (event) => {
    event.preventDefault();
    if (!this.state.id) return;
    this.props.deleteSmurf(this.state.id);
    this.setState({
        name: '',
        age: '',
        height: '',
        id: ''
    });
  };

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
          <button onClick={this.updateSmurf}>Update</button>
          <button onClick={this.deleteSmurf}>Delete</button>
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

export default connect(mapStateToProps, { addSmurf })(SmurfForm);