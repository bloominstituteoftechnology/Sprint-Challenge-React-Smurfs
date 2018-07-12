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
      this.setState({ smurfs : res.data })
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(deletedSmurf => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
  };

  render() {
    return (
      <div className="Smurfs">
        { this.state.smurfs.map((smurf,index) => {
          return [
            <div key={index }className="Smurfs__List">
              <h3 className="Smurfs__text H3">{ smurf.name } -</h3>
              <p className="Smurfs__text P">{ smurf.age } Years Old</p>
              <p className="Smurfs__text P">{ smurf.height } Feet Tall</p>
              <button className="Smurfs__Delete" onClick={ () => { this.deleteSmurf(smurf.id) }}>X</button>
            </div>
          ]
        })}
      </div>
    );
  }
}

export default Smurfs;
