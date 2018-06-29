import React, { Component } from 'react';
import axios from 'axios';
import Input from './elements/Input';
import Form from './elements/Form';
import Button from './elements/Button';
class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      name: '',
      age: '',
      height: ''
    };
  }
  toggleUpdateButton = () => {
    this.setState({ update: !this.state.update });
  };

  handleInputchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { id } = this.props.smurf;
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(res => res.data)
      .then(() => this.props.updateSmurfs())
      .catch(err => console.log(err));
    this.setState({ name: '', age: '', height: '', update: false });
  };

  render() {
    let { smurf } = this.props;

    if (!this.state.update) {
      return (
        <Button onClick={this.toggleUpdateButton}>Update {smurf.name}</Button>
      );
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.name}
            placeholder="Name"
            name="name"
            onChange={this.handleInputchange}
          />
          <Input
            value={this.state.age}
            placeholder="Age"
            name="age"
            onChange={this.handleInputchange}
          />
          <Input
            value={this.state.height}
            placeholder="Height"
            name="height"
            onChange={this.handleInputchange}
          />
          <Button type="submit">Update</Button>
        </Form>
        <Button onClick={this.toggleUpdateButton}>Cancel</Button>
      </div>
    );
  }
}

export default UpdateSmurf;
