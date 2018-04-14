import React, {Component} from 'react';

class Smurf extends Component {

  handleClick = () => {
    this.props.handleDelete(this.props.id);
  };

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={this.handleClick}>Delete {`${this.props.name}`}</button>
      </div>
    );
  };
  }

export default Smurf;
