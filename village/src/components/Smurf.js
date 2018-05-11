import React, { Component } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {},
      deleted: false,
      name: '',
      age: null,
      height: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id);
    this.fetchSmurf(id);
  }

  fetchSmurf = (id) => {
    console.log(`fetching smurf with id=${id}`)
    axios
      .get(`http://localhost:3333/smurfs/${id}`, id)
      .then((res) => {
        this.setState(() => ({smurf: res.data}))
      })
      .catch(err => console.log(err))
    console.log(this.state)
  }

  deleteSmurf = () => {
    const id = 1;
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(resp => this.setState({deleted: true}))
        .catch(err => console.log(err))
  }

  render() { 
    return (
      <div className="single-smurf">
        <SmurfCard 
          name={this.state.smurf.name}
          age={this.state.smurf.age}
          height={this.state.smurf.height}
          id={this.state.smurf.id}
        />
        <div className="update-delete">
          <h2>Update Smurf information</h2>
          <button onClick={this.deleteSmurf}>Delete</button>
        </div>
      </div>
    )
  }
}
 
export default Smurf;

