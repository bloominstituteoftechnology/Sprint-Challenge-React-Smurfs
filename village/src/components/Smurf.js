import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modifySmurf, deleteSmurf } from '../actions';
class Smurf extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: '',
      age: -1,
      height: ''
    }
  }

  toggleEdit = () => {
    this.setState({
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
      isEditing: !this.state.isEditing
    });
  }

  editSmurf = () => {
    this.props.modifySmurf({
      id: this.props.id,
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.toggleEdit();
  }

  deleteSmurf = () => {
    const res = this.props.deleteSmurf(this.props.id);
  }

  bindName = (event) => {
    this.setState({name: event.target.value});
  }

  bindAge = (event) => {
    this.setState({age: event.target.value});
  }

  bindHeight = (event) => {
    this.setState({height: event.target.value});
  }

  render() {
    return (
      <div className="Smurf">
        <div hidden={this.state.isEditing}>
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} old</p>
        </div>
        <div hidden={!this.state.isEditing}>
        <form onSubmit={this.editSmurf}>
          <div><input onChange={this.bindName} value={this.state.name} name="name" /></div>
          <div><input onChange={this.bindAge} value={this.state.age} name="age" /></div>
          <div><input onChange={this.bindHeight} value={this.state.height} name="height" /></div>
        </form>
        </div>
        <div hidden={this.state.isEditing}>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.deleteSmurf}>Delete</button>
        </div>
        <div hidden={!this.state.isEditing}>
          <button onClick={this.editSmurf}>Submit</button>
          <button onClick={this.toggleEdit}>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    modifySmurf,
    deleteSmurf
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Smurf);