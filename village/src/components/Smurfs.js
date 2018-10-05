import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';
import './Smurfs.css';

import smurfsImg from  './Home/img/smurfs_img.jpg';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3333/smurfs';

    axios
    .get(endpoint)
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }

  render() {
    return (
      <div className="Smurfs">
        <div className="image-container">
          <img src={smurfsImg} alt="smurfs jumbotron" className="smurfs-img"/>
        </div>
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
