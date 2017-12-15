import React, { Component } from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurf extends Component {
  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteSmurf(this.props.id);
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} old</p>
        <p>{`ID: ${this.props.id}`}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { deleteSmurf })(Smurf);