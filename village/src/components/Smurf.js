import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      age: ''
    }
  }

  inputChangehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  removeSmurf = (e) => {
  e.preventDefault();
  axios
    .delete(`http://localhost:3333/smurfs/${this.props.id}`)
    .then(response => {
      this.props.deleteFromDB(response.data)
    })
    .catch(err => console.log(err));
  };

  updateSmurf = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${this.props.id}`, {
        age: this.state.age
      })
      .then(response => {
        this.props.updateDB(response.data);
      }) 
      .catch(err => console.log(err));
    this.setState({
      age: ''
    });
  };

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <p>Update this Smurf's age!</p>
        <form onSubmit={this.updateSmurf}>
          <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={this.inputChangehandler}
            value={this.state.age}
          />
        </form>
        <button onClick={this.removeSmurf}>Bye, Smurf!</button>
      </div>
    );
  };
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

