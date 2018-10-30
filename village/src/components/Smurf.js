import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      age: '',
      smurf: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getSmurf(id);
  }

  getSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        this.setState({
          smurf: response.data
        });
      })
      .catch(err => console.log(err))
  }

  // componentWillReceiveProps (newProps) {
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.getSmurf(newProps.match.params.id);
  //   }
  // }

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
        <Link to={`/smurfs/${this.props.id}`}>
          <h3>{this.props.name}</h3>
        </Link>
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

