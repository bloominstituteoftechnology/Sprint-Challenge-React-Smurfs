import React from "react";

class Smurf extends React.Component {
  state = {
    editing: false,
    smurf: {
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height,
      id: this.props.smurf.id,
    },
  };

  toggleEdit = () => {
    if (this.state.editing) this.setState({ editing: false });
    else this.setState({ editing: true });
  };

  updateSmurf = event => {
    const newSmurf = this.state.smurf;
    newSmurf[event.target.name] = event.target.value;

    this.setState({
      smurf: newSmurf,
    });
  };

  saveSmurf = smurf => {
    this.props.edit(smurf);
  };

  SmurfEdit = () => {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.toggleEdit();
            this.saveSmurf(this.state.smurf);
          }}
        >
          <input
            type="text"
            name="name"
            value={this.state.smurf.name}
            onChange={this.updateSmurf}
          />
          <input
            type="number"
            name="age"
            value={this.state.smurf.age}
            onChange={this.updateSmurf}
          />
          <input
            type="number"
            name="height"
            value={this.state.smurf.height}
            onChange={this.updateSmurf}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  };

  SmurfInfo = () => {
    return (
      <div className="Smurf">
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} old</p>
        <button onClick={() => this.props.delete(this.props.smurf.id)}>
          Delete
        </button>
        <button onClick={this.toggleEdit}>Edit</button>
      </div>
    );
  };

  render() {
    return this.state.editing ? this.SmurfEdit() : this.SmurfInfo();
  }
}

export default Smurf;
