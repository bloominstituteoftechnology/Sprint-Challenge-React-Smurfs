import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.fetchSmurf()
  }

  fetchSmurf = id => {
    axios
    .get(`http://localhost:3333/smurfs/${id}`)
    .then((response) => this.setState({ smurfs: response.data }))
    .catch(error => console.log(`${error}`))
  };
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`./smurf/${smurf.id}`} key={smurf.id}>{smurf.name}</Link>
              
              
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
