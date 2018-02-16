import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  updateData = (response) => {
    this.setState({ smurfs: response.data });
  }

  fetchData = () => {
    axios.get('http://localhost:3333/smurfs/')
    .then(response => {
      console.log(response);
      this.updateData(response);
    })
    .catch(err => {
      console.error(err);
    })
  }

  deleteData = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      let smurfs = this.state.smurfs;
      smurfs = smurfs.filter(smurf => smurf.id != response.data.SmurfRemoved.id);
      this.setState({ smurfs: smurfs});
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentWillReceiveProps() {
    this.fetchData();
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf delete={this.deleteData} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          }) }
        </ul>
      </div>
    );
  }
}

export default Smurfs;