import React, { Component } from 'react';
import axios from  'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data,
        });
      })
      .catch(() => {
        console.error('error getting data');
      });
    }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />;
          })}
        </ul>
      </div>
    );
  }

  removeSmurf = id => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log('response from delete', response);
        this.setState({ smurfs: response.data });
      })
      .catch(() => {
        console.error('error deleting');
      });
  };

}

export default Smurfs;
