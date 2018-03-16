import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import { Redirect } from 'react-router-dom';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    }
  }
      
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
        console.log(response)
      })
      .catch(err => console.log(err))
      
  }

  componentDidMount() {
    this.getSmurfs()
    console.log('this.state', this.state)
  }

  deleteSmurf = (event) => {
    
    console.log(event.target.id)
    let remove = {};
    console.log(this.state.smurfs, 'state smurfs')
    this.state.smurfs.forEach(smurf => {
      console.log('smurf.id', smurf.id)
      console.log('event.target.id', event.target.id)
      if (smurf.id === Number(event.target.id)) remove = smurf;
    });
    
    console.log('remove', remove);

    axios.delete(`http://localhost:3333/smurfs/${remove.id}`)
    .then(response => {
      console.log('response', response);
      this.setState({ smurfs: response.data });
      this.getSmurfs();
      
    })
    .catch(err => console.log(err))
  }
  


  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
              { this.state.smurfs.map(smurf => {
                return(
                  <div>
                  <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
                  <button id={smurf.id} onClick={this.deleteSmurf} color="danger">Delete</button>
                  </div>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }
}

export default Smurfs;