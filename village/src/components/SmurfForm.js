import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs, delSmurf, putSmurf } from '../actions';

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
  }

  addSmurf(event) {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.props.getSmurfs(); //added in to refresh the smurflist
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  editSmurf = (event) => {
    event.preventDefault();
    this.props.putSmurf({
      id: Number(this.state.id),
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
    this.props.getSmurfs(); //added in to refresh the smurflist
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  deleteSmurf = event => {
    event.preventDefault();
    this.props.delSmurf({
      id: Number(this.state.id)
    });
    this.props.getSmurfs(); //added in to refresh the smurflist
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

  updateId = (event) => {
    this.setState({
      id: Number(event.target.value)
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateId}
            placeholder="ID"
            value={this.state.id}
          />
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
          <button type="submit">Add to the village</button>
        </form>
        <form onSubmit={this.editSmurf}>

          <button onClick={this.editSmurf}>Edit Smurf</button>
          <button onClick={this.deleteSmurf}>DELETE</button>
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

export default connect(mapStateToProps, { addSmurf, getSmurfs, putSmurf, delSmurf })(SmurfForm);