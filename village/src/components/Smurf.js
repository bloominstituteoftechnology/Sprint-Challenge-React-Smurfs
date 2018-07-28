import React from "react";
import axios from "axios";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editState: false,
      editedName: "",
      editedHeight: "",
      editedAge: ""
    };
  }

  toggleSmurf = () => {
    this.setState({ editState: !this.state.editState });
  };
  editSmurf = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("editedName: ", this.state.editedName);
    console.log("editedAge: ", this.state.editedAge);
  };
  saveEditSmurf = () => {
    const smurf = {
      name: this.state.editedName,
      height: this.state.editedHeight,
      age: this.state.editedAge
    };
    axios
      .put(`http://localhost:3333/smurfs/${this.props.id}`, smurf)
      .then(response => {
        this.setState({ editedName: "" });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>

        {this.state.editState ? (
          <form>
            <input
              placeholder="edit name"
              type="text"
              onChange={this.editSmurf}
              name="editedName"
            />
            <input
              placeholder="edit height"
              type="text"
              onChange={this.editSmurf}
              name="editedHeight"
            />
            <input
              placeholder="edit age"
              type="text"
              onChange={this.editSmurf}
              name="editedAge"
            />
            <button onClick={this.saveEditSmurf}>Submit Changes</button>
          </form>
        ) : null}
        <button onClick={() => this.props.deleteSmurf(this.props.id)}>
          Delete Smurf
        </button>
        <button onClick={this.toggleSmurf}>Edit Smurf</button>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
