import React, { Component } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  editSmurf = event => {
    //event.preventDefault();
    const editedSmurf = this.state;
    Axios
    .put(`http://localhost:3333/smurfs/${this.props.id}`, editedSmurf)
    .then(response => {
      console.log(response.data);
      this.props.handleData(response.data);
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder={"name"}
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
         <button type="submit" onClick={this.editSmurf}>Submit changes</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
