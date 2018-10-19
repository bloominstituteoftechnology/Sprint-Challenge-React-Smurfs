import React from 'react';

import axios from 'axios';


class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  deleteSmurf = event => {
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        this.props.addNewSmurf(response.data)
      })

      .catch(err =>
        console.log(err));
  }

  render() {
    return (
      <div className="Smurf">
        <div className='smurf-text'>
        <h3>{this.props.name}</h3>
        <strong>{this.props.height}cm tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={this.deleteSmurf}>Delete</button>
        </div>
      </div>
    );
  };

}
Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

