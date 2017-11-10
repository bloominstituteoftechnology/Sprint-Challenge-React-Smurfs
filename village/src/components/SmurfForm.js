import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, alterSmurf } from '../actions';

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
  }

  addSmurf(event) {
    event.preventDefault();
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
  
  updateIndex(event) {
    this.setState({
      index: event.target.value
    });
  }

  alterSmurf = (event) => {
    event.preventDefault();
    if (!this.state.index) {
      return;
    }
    const smurf = {
      index: this.state.index,
      update: {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
    };
    this.props.alterSmurf(smurf);
    this.setState({
      name: '',
      age: '',
      height: '',
      index: ''
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
            onChange={this.updateIndex}
            placeholder="height"
            value={this.state.index}
          />
          <input
            onChange={this.updateHeight}
            placeholder="index"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
          <button type="submit"> Alter the Smurf </button>
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