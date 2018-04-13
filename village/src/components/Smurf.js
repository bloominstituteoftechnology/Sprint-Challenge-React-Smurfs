import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';
import axios from 'axios';

import './Smurf.css';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

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

  render() {
    return (
      <div className="Smurf">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          <div className="editSmurf">
            <Button color="warning" className="editSmurfButton" onClick={this.showUpdateSmurfForm}>
              Update
            </Button>
            <Button color="danger" className="editSmurfButton" onClick={() => this.deleteSmurf(this.props.id)}>
              Delete
            </Button>
          </div>
        </Card>
      </div>
    );
  }
};

export default Smurf;
