import React from 'react';

class Smurf extends React.Component {
  state = {
    editing: false,
    smurfName: '',
    smurfAge: '',
    smurfHeight: '',
  }

  render() {
    const editing = this.state.editing;

    return (
      <div className="Smurf">
        {editing === true ? (
          <div>
            <input type="text" name="smurfName" value={this.state.smurfName} onChange={this.handleChange} />
            <input type="text" name="smurfAge" value={this.state.smurfAge} onChange={this.handleChange} />
            <input type="text" name="smurfHeight" value={this.state.smurfHeight} onChange={this.handleChange} />
            <button onClick={() => this.updateSmurf()}>Save</button>
          </div>
        ) : (
          <div>
            <h3>{this.props.name}</h3>
            <strong>{this.props.height} tall</strong>
            <p>{this.props.age} old</p>
          </div>
        )}
        <button onClick={this.toggleEditing}>{ editing ? 'Cancel' : `Modify ${this.props.name}`}</button>
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete {this.props.name}</button>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      smurfName: this.props.name,
      smurfAge: this.props.age,
      smurfHeight: this.props.height,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleEditing = () => {
    this.setState(prevState => {
      return {
        editing: !prevState.editing,
      };
    });
  };

  updateSmurf = () => {
    const updatedSmurf = {
      name: this.state.smurfName,
      age: this.state.smurfAge,
      height: this.state.smurfHeight,
      id: this.props.id
    };
    this.props.onUpdate(updatedSmurf)
      .then(() => {
        this.setState({ editing: false });
      })
      .catch((error) => console.error('update failed', error))

  };

}

export default Smurf;