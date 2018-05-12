import React, { Component } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';
import { Link } from 'react-router-dom';

export default class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    }
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => { console.log(err) })
  }

  render() {
    console.log('Smurfs.fs', this.state.smurfs);
    return (
      <div className="Smurfs">
        {this.state.smurfs.map(smurf => (
          <SmurfDetails key={smurf.id} smurf={smurf} />
        ))}
      </div>
    )
  }
}

function SmurfDetails({ smurf }) {
  console.log('Smurf Id', smurf.id);
  return (
    <Link to={`/${smurf.id}`}>
      <SmurfCard smurf={smurf} />
    </Link>
  )
}
