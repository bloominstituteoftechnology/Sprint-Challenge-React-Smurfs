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
      index: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    const addSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
      index: ''
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

  updateIndex = (event) => {
    this.setState({
      index: event.target.value
    });
  };

  updateSmurf = (event) => {
    event.preventDefault();
    if (!this.state.index) {
      return;
    }
    const data = {
      index: this.state.index,
      update: {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
    };
    this.props.updateSmurf(data);
    this.setState({
      name: '',
      age: '',
      height: '',
      index: ''
    });
  };

  deleteSmurf = (event) => {
    event.preventDefault();
    if (!this.state.index)
      return;
    this.props.deleteSmurf(this.state.index);
    this.setState({
      name: '',
      age: '',
      height: '',
      index: ''
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
          <button type="submit">Add to the village</button>
        </form>

        <form onSubmit={this.updateSmurf}>
        <input
            onChange={this.updateIndex}
            placeholder="index"
            value={this.state.index}
          />
          <button onClick={this.updateSmurf}>Update the village</button> 
          <button onClick={this.deleteSmurf}>Delete this Smurf!</button>
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

export default connect(mapStateToProps, { addSmurf, updateSmurf, deleteSmurf })(SmurfForm);