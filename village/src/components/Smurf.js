import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  state = {
    editing: false,
    name: '',
    age: '',
    height: '',
  };

  componentDidMount() {
    this.setState({
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
    })
  }

  killSmurf = (id) => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {this.props.loadSmurfs()})
    .catch((error) => {
      console.error(`Couldn't execute smurf due to error: ${error}`)
    });
  }

  toggleEditing = () => {
    this.setState(prevState => {
      return {
        editing: !prevState.editing,
      };
    });
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

  updateSmurf = () => {
    const { name, age, height } = this.state;
    axios
    .put(`http://localhost:3333/smurfs/${this.props.id}`, { name, age, height })
    .then(response => {
      console.log(`Server response to edit is: ${response}`);
      this.setState({ editing: false });
      this.props.loadSmurfs();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const editing = this.state.editing;

    return (
      <div className="Smurf">
      {editing === true ? (
        <div>
          <h3>Edit {this.props.name}</h3>
          <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.updateName}
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            value={this.state.height}
          />
          <button type="submit">Update smurf</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} old</p>
          <button onClick={this.toggleEditing}>Edit smurf</button>
          <button onClick={() => {this.killSmurf(this.props.id);}}>Execute smurf</button>
        </div>
      )}
      </div>
    );
  }
}

export default Smurf;