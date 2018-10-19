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
      <div>
        <form onSubmit={this.props.addSmurf} className="smurfForm">
        <h1>New Smurf!</h1>
        <div className="titleBorder"/>
          <input
            onChange={this.props.handleInputChange}
            placeholder="Smurfy Name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="Smurfy Age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="Smurfy Height"
            value={this.props.smurf.height}
            name="height"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="Smurfy Image"
            value={this.props.smurf.imgUrl}
            name="imgUrl"
          />
          <button 
          type="submit" 
          onClick={(event) => {this.props.addSmurf(event); this.props.history.push('/')}} className="submitButton" >Make magic happen!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
