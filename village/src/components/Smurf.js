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

}

export default Smurf;