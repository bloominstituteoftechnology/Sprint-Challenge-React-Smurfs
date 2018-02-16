import React from 'react';

class Smurf extends React.Component {
  state = {
    editing: false,
    smurfName: '',
    smurfAge: '',
    smurfHeight: '',
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} old</p>
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete {this.props.name}</button>
      </div>
    );
  }
}

export default Smurf;