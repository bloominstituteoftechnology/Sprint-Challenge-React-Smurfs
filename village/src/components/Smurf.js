import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';
import axios from 'axios';

import './Smurf.css';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateSmurfForm: false,
      name: '',
      age: '',
      height: '',
    };
  }

  showUpdateSmurfForm = () => {
    this.setState({ showUpdateSmurfForm: !this.state.showUpdateSmurfForm });
  };

  updateSmurf = smurfId => {
    const smurf = {};
    if (this.state.name !== '') {
      smurf.name = this.state.name;
    }
    if (this.state.age !== '') {
      smurf.age = Number(this.state.age);
    }
    if (this.state.height !== '') {
      smurf.height = this.state.height;
    }
    axios
      .put(`http://localhost:3333/smurfs/${smurfId}`, smurf)
      .then(res => {
        this.props.getSmurfs();
        this.setState({
          showUpdateSmurfForm: false,
          name: '',
          age: '',
          height: '',
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = smurfId => {
    console.log(smurfId);
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        this.props.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleEditSmurf= e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Smurf">
        <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
        >
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          <div className="editSmurf">
            <Button
              color="warning"
              className="editSmurfButton"
              onClick={this.showUpdateSmurfForm}
            >
              Update
            </Button>
            <Button
              color="danger"
              className="editSmurfButton"
              onClick={() => this.deleteSmurf(this.props.id)}
            >
              Delete
            </Button>
          </div>
          {this.state.showUpdateSmurfForm ? (
            <div>
              <input
                type="text"
                onChange={this.handleEditSmurf}
                placeholder="name"
                name="name"
                value={this.state.name}
              />
              <input
                type="text"
                onChange={this.handleEditSmurf}
                placeholder="age"
                name="age"
                value={this.state.age}
              />
              <input
                type="text"
                onChange={this.handleEditSmurf}
                placeholder="height"
                name="height"
                value={this.state.height}
              />
              <button onClick={() => this.updateSmurf(this.props.id)}>Save Smurf</button>
            </div>
          ) : null}
        </Card>
      </div>
    );
  }
};

export default Smurf;
