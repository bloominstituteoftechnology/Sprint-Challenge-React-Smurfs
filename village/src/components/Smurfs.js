import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
    };
  }

  getData = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data });
    })
    .catch(error => {
      alert('There was an error:', error);
    });
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Patrick's Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.getData();
  }
}

export default Smurfs;