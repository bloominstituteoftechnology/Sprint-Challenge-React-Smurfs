import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    //Find the smurf we're modifying by id
    let smurf;

    for (let i = 0; i < props.smurfs.length; i++) {
      //Had to use loosey-goosey comparison for this to work
      //I think the one in smurfs is a number and the one in match is a string
      if (props.smurfs[i].id == props.match.params.id) {
        smurf = props.smurfs[i]
        i = props.smurfs.length;
      }
    }

    this.state = {
      smurf: smurf,
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      handleSmurfsUpdate: props.handleSmurfsUpdate
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSmurfUpdate() {
    //using axios post to update a smurf from the state of the form
    axios.put(`http://localhost:3333/smurfs/${this.state.smurf.id}`, {name: this.state.name, age: this.state.age, height: this.state.height})
      .then((result) => this.state.handleSmurfsUpdate(result.data))
      .catch((err) => console.log(err));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Link to="/smurfs"><button onClick={this.handleSmurfUpdate.bind(this)}>Modify Smurf</button></Link>
        </form>
        <Link to="/smurfs"><button>Back</button></Link>
      </div>
    );
  }
}

export default UpdateForm;
