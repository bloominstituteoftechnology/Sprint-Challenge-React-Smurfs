import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component { //passing state down as props
  constructor(props) {
    super(props);
    this.state = {
      smurfs: null
    };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:3333/api/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
