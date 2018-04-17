import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }
  

  render() {
    return (
      <div className="smurfList">
      <Link to={`/addSmurf`} >
        <button className="button button-add" > Add a Smurf </button>
      </Link>
        <div><h1>Smurf Village</h1></div>
        <ul>
          {this.state.smurfs.map(smurf => {
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
