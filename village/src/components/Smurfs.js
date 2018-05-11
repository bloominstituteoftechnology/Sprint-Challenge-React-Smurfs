import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRemoveSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {console.log(res.status)})
        .catch(err => console.log(err))

    window.location.reload();
  }

  handleEditSmurf = (id) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, this.state)
        .then(res => console.log(res.status))
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  handleRemoveSmurf={this.handleRemoveSmurf}
                  handleEditSmurf={this.handleEditSmurf}
                  handleInputChange={this.handleInputChange}
                  state={this.state}
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;