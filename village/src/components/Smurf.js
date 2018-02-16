import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  state = {

  };

  killSmurf = id => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {this.props.loadSmurfs()})
    .catch((error) => {
      console.error(`Couldn't execute smurf due to error: ${error}`)
    });
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} old</p>
        <button onClick={() => {this.killSmurf(this.props.id);}}>Execute smurf</button>
      </div>
    );
  }
}

export default Smurf;