import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    const newSmurf = {
      name,
      age,
      height,
    };
    newSmurf.height = newSmurf.height + 'cm';
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.props.handleUpdate(response.data);
        this.props.history.push('/');
      })
      .catch(err => console.log('ERR creating a new smurf:', err));

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteSmurf = e => {
    e.preventDefault();
    let selectedSmurf = document.getElementById('selectSmurf').value;
    let smurf = this.props.smurfs.find(s => s.name === selectedSmurf);
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => this.props.handleUpdate(response.data))
      .catch(err => console.log('ERR deleting', err));
  };

  render() {
    return (
      <div className="SmurfForm" style={{ marginLeft: '20%' }}>
        <Form inline onSubmit={this.addSmurf}>
          <FormGroup>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </FormGroup>
          <Button type="submit">Add to the village</Button>
        </Form>
        <br />
        <Form inline onSubmit={this.deleteSmurf}>
          <FormGroup>
            <Input type="select" name="select" id="selectSmurf">
              {this.props.smurfs.map((e, key) => {
                return (
                  <option key={key} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </Input>
          </FormGroup>
          <Button type="submit">Banish from village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
