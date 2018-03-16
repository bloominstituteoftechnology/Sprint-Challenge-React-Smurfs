import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs: []
  }

  componentDidMount() {
    axios.get('https://http://localhost:3333/smurfs')
      .then(response => this.setState({smurfs: response.data}))
      .catch(console.log('Error'));
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf 
              name={this.smurf.name} 
              age={this.smurf.age} 
              height={this.smurf.height} 
              key={this.smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;