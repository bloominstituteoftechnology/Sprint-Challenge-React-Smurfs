import React from "react";

class Smurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: this.props.id,
    display: false,
  }

  render() {
    const smurf = {name: this.state.name, age: this.state.age, height: this.state.height, id: this.state.id};
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} old</p>
        {!this.state.display ? <button onClick={() => {this.props.onDelete(this.props);}} >Delete</button> : null}
        {!this.state.display ? <button onClick={this.displayForm}>update</button> : null}
        {!this.state.display ? null : 
        <div className="SmurfForm">
        <form>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button onClick={() => {this.props.onUpdate(smurf);}} >Update</button>
        </form>
        </div>}
      </div>
    );
  }

  displayForm = event => {
    this.setState({display: !this.state.display})
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }
}

export default Smurf;
