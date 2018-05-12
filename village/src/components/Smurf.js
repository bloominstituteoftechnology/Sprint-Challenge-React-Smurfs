import React, { Component } from 'react';
const axios = require('axios')

class Smurf extends Component {
  deleteSmurf = () => {
    let id = this.props.id;
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response)
      })
    .catch(err => {
      console.log("You have failed to exile the smurf from the village")
    })
  }
  render() {
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button type="submit" value={this.props.id} onClick={this.deleteSmurf}>Exile {this.props.name} from Smurf Village</button>
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

