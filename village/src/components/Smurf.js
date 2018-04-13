import React from "react";
import axios from "axios";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      toggleForm: false
    };
  }

  toggleUpdateInput = () => {
    this.setState({ toggleForm: !this.state.toggleForm });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = id => {
    const smurf = {};
    if (this.state.name !== "") smurf.name = this.state.name;
    if (this.state.age !== "") smurf.age = this.state.age;
    if (this.state.height !== "") smurf.height = this.state.height;

    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(response => {
        this.setState({ toggleForm: false, name: "", age: "", height: "" });
        this.props.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeSmurf = smurf_id => {
    const id = smurf_id;
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.props.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button
          onClick={() => {
            if (window.confirm("Remove Smurf - Are You Sure?")) {
              this.removeSmurf(this.props.id);
            }
          }}
        >
          Remove Smurf
        </button>
        <button onClick={this.toggleUpdateInput}> Update Smurf </button>

        {this.state.toggleForm ? (
          <div className="innerInput">
            <input
              placeholder="Name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            <input
              placeholder="Age"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
            <input
              placeholder="Height"
              name="height"
              onChange={this.handleInputChange}
              value={this.state.height}
            />
            <button onClick={() => this.updateSmurf(this.props.id)}>
              Save Changes
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Smurf;
