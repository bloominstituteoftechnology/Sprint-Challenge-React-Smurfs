import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SmurfCard from './SmurfCard';

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
              <Link to={`/smurf/${smurf.id}`} key={smurf.id}>
                <SmurfCard smurf={smurf}/>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

SmurfCard.defaultProps = {
 smurfs: [],
};

export default Smurfs;

