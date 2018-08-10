import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Smurf extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      id: '',
      name: '',
      height: '',
      age: ''
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      height: this.props.height,
      age: this.props.age
    })
  }

  changeInput = () => {
    this.setState({ isEditing: true });
  }

  updateName = (e) => {
    this.setState({name: e.target.value});
  }

  updateHeight = (e) => {
    this.setState({height: e.target.value});
  }

  updateAge = (e) => {
    this.setState({age: e.target.value});
  }

  handleEdit = () => {    
    const id = this.state.id;

    axios.put(`http://localhost:3333/smurfs/${id}`, {
      id: id,
      name: this.state.name,
      height: this.state.heigth,
      age: this.state.age
    })
    .catch(e => console.error(e))
    .finally(() => this.setState({ isEditing: false }))
    .finally(() => this.props.handleSyncingDB)
  }

  render() {
    return (
      <div className="Smurf" data-id={this.props.id}>
        {
          this.state.isEditing
            ? <Fragment>
              <input onChange={this.updateName} type="text" placeholder="name" />
              <input onChange={this.updateHeight} type="text" placeholder="height" />
              <input onChange={this.updateAge} type="text" placeholder="age" />
              <button onClick={this.handleEdit}>Save</button>
              </Fragment>
            : <Fragment>
              <h3 onDoubleClick={this.changeInput}>{this.state.name}</h3>
              <p onDoubleClick={this.changeInput}>{this.state.height} tall</p>
              <p onDoubleClick={this.changeInput}>{this.state.age} smurf years old</p>
              </Fragment>
        }

        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;