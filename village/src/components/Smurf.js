import React, { Component } from 'react';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    const localDelete = this.props.makeDelete(this.props.id);
    localDelete();
  }
  
  render () {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }
  }

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

