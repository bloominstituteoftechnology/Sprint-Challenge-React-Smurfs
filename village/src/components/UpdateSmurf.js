import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateSmurf = smurfID => {
    const newSmurfInfo = {};
    if (this.state.name !== '') newSmurfInfo['name'] = this.state.name;
    if (this.state.height !== '') newSmurfInfo['height'] = this.state.height;
    if (this.state.age !== '') newSmurfInfo['age'] = this.state.age;

    axios
      .put(`http://localhost:3333/smurfs/${smurfID}`, newSmurfInfo)
      .then(response => {
        this.setState({ name: '', height: '', age: '' });
        this.props.getSmurfs();
        this.props.toggleState();
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.updateSmurf}>
          <ModalHeader>Update Information</ModalHeader>
          <ModalBody className="Module__body">
            <input
              type="text"
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name"
            />
            <input
              className="Module__middleInput"
              type="text"
              onChange={this.handleInputChange}
              name="height"
              placeholder="Height"
            />
            <input
              type="text"
              onChange={this.handleInputChange}
              name="age"
              placeholder="Age"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={() => this.updateSmurf(this.props.smurf.id)}>Update</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default UpdateSmurf;
