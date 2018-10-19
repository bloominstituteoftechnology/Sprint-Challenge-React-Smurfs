import React, { Component } from 'react';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

 
 

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button 
          type="submit" 
          onClick={(event) => {this.props.addSmurf(event); this.props.history.push('/')} }>Make magic happen!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
