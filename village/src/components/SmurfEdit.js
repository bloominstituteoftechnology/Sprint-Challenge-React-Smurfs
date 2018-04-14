import React, { Component } from "react";
import axios from "axios";

class SmurfEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      showEditSmurf: false
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // set state to not false for showEditSmurf
  showEditSmurf = () => {
    this.setState({ showEditSmurf: !this.state.showEditSmurf });
  };

  editSmurf = id => {
    const smurf = {};
    if (this.state.name !== "") {
      smurf.name = this.state.name;
    }
    if (this.state.age !== "") {
      smurf.age = this.state.age;
    }
    if (this.state.height !== "") {
      smurf.height = this.state.height;
    }
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(response => {
        console.log(response);
        this.setState({
          //reset everything after request has gone thru
          showUpdateFriend: false,
          name: "",
          age: "",
          email: ""
        });
        this.props.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.showEditSmurf}>Edit Smurf Profile</button>

        {this.state.showEditSmurf ? (
          <div>
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
            <button onClick={() => this.editSmurf(this.props.id)}>Save</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SmurfEdit;
