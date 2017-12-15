import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import { deleteSmurf } from '../actions';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Brainey',
      age: 200,
      height: '5cm'
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: 'Brainey',
      age: 200,
      height: '5cm'
    }
    
  }
  deleteSmurf(event) {
    event.preventDefault();
    this.props.deleteSmurf(this.state);
    this.setState({
      name: 'Brainey',
      age: 200,
      height: '5cm'
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf }, { deleteSmurf })(SmurfForm);