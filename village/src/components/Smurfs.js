import React, { Component } from 'react';
import axios from 'axios';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res);
      this.setState({ smurfs : res.data })
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        { this.state.smurfs.map(smurf => {
          return [
            <div>
              <h3>{ smurf.name }</h3>
              <p>{ smurf.age }</p>
              <p>{ smurf.height }</p>
            </div>
          ]
        })}
      </div>
    );
  }
}

export default Smurfs;
