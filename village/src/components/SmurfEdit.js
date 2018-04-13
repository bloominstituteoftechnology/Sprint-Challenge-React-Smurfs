import React, { Component } from "react";
import axios from "axios";

class SmurfEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
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
    axios
      .put(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response);
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.showEditSmurf}>Edit Smurf Profile</button>

        {this.showEditSmurf ? (
          <div>
            <input
              type="text"
              placeholder="Name"
              onChnage={this.handleInputChange}
              value={this.state.name}
            />
            <input
              type="text"
              placeholder="age"
              onChnage={this.handleInputChange}
              value={this.state.age}
            />
            <input
              type="text"
              placeholder="height"
              onChnage={this.handleInputChange}
              value={this.state.height}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SmurfEdit;
