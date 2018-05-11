import React, { Component } from 'react';
import axios from 'axios';


import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:3333/smurfs`)
       .then(response => {
          this.setState({ smurfs: response.data });
       })
       .catch(err => {
         console.log(err);
       });
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf smurf={smurf}
                key={smurf.id}
              />
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
