import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor(props) {
    super(props);

    this.state = {
      smurfs: [],
      errorMessage: '',
    };
  }

  loadSmurf = () => {
    const endpoint = 'http://localhost:3333/smurfs';

    axios
      .get(endpoint)
      .then((response) => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        this.setState({ errorMessage: "Failed to find smurfs" });
      });
  }

  componentDidMount() {
    this.loadSmurf();
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
