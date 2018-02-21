import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.removeSmurf = this.removeSmurf.bind(this);
  }

  render() {
    return (
      <div className="Smurf">
        <strong>{this.props.name}</strong>
        <span className="info">
          <strong>{this.props.height} tall</strong>,&nbsp;
          <span>{this.props.age} years old</span>
        </span>
        <span className="buttons">
          <i 
            className="fa fa-trash"
            onClick={this.removeSmurf}
          ></i>
        </span>
      </div>
    );
  }

  removeSmurf() {
    // add code to create the smurf using the api
    axios
      .delete('http://localhost:3333/smurfs/' + this.props.id)
      .then(response => {
        this.props.onChange(); // tell parent to load smurfs
      })
      .catch(error => {
        console.error('error deleting the data');
      });
  }
}

export default Smurf;