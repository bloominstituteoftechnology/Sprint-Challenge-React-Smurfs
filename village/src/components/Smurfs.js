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
        { this.state.smurfs.map(smurf => {
          return [
            <div className="Smurfs__List">
              <h3 className="Smurfs__text H3">{ smurf.name } -</h3>
              <p className="Smurfs__text P">{ smurf.age } Years Old</p>
              <p className="Smurfs__text P">{ smurf.height } Tall</p>
            </div>
          ]
        })}
      </div>
    );
  }
}

export default Smurfs;
