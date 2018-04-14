import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = { name: this.state.name, height: this.state.height, age: this.state.age};

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {this.props.getSmurfs()})
      .catch(err => console.log(err));
      this.setState({ name: '', age: '', height: ''});
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container className="col-3 SmurfForm">
        <Row className="SmurfForm--top">
          <input
            className="col-12 addSmurfInput"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
        </Row>
        <Row className="SmurfForm--mid">
          <input
            className="col-5 addSmurfInput"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="col-5 addSmurfInput"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
        </Row>
        <button className="Button" type="submit" onClick={this.addSmurf}>Add to the village</button>
      </Container>
    );
  }
}

export default SmurfForm;
