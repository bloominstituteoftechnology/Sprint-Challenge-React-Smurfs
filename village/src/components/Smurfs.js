import React, { Component } from 'react';
import axios from 'axios';
import SmurfForm from './SmurfForm'
import { Link } from 'react-router-dom'


class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.fetchSmurfs()
  }

  fetchSmurfs = () => {
    axios.get(`http://localhost:3333/smurfs/`)
      .then((response) => this.setState({ smurfs: response.data}))
      .catch(error => console.log(`${error}`))
  }

  render() {
    return (
      <div className="Smurfs">
      <SmurfForm />
        <h1>Smurf Village</h1>
        
          {this.state.smurfs.map(smurf => {
            let id = smurf.id
            console.log("smurf", smurf)
            return (
              <Link 
              key={smurf.id}
              style={{ textDecoration: 'none', color: "black" }} to={{ pathname: `/smurf/${id}`,
              state: {
                name: smurf.name,
                height: smurf.height,
                age: smurf.age,
              },
              }}>
              <br />
              <div style={{ border: "1px solid black", width: "20%", marginLeft: "40%"}}>

              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
              </div>
              </Link>
             
            );
          })}
      </div>
    );
  }
}

export default Smurfs;