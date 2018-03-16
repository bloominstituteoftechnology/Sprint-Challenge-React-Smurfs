import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Row, Col } from 'reactstrap';
import './Smurfs.css';


class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    }
    this.getSmurfs = this.getSmurfs.bind(this)
    this.deleteSmurf = this.deleteSmurf.bind(this)

  }
      
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => console.log(err))
      
      
  }

  componentDidMount() {
    this.getSmurfs()
  }

  deleteSmurf = (event) => {
    let remove = {};
    this.state.smurfs.forEach(smurf => {
      if (smurf.id === Number(event.target.id)) remove = smurf.id;
    });
    
    axios.delete(`http://localhost:3333/smurfs/${remove}`)
    .then(response => {
      this.getSmurfs();
    })
    .catch(err => console.log(err))
  }
  


  render() {

    return (
      <div className="Smurfs">
      <div className="heading">
        <h1>Welcome to Smurf Village </h1>
        <h3> Population: {this.state.smurfs.length} </h3>
        </div>
        <ul>
            { this.state.smurfs.map(smurf => {
              return(
                  <div className="cards">
                    <Card className="card" color="warning">
                      <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
                      <Button id={smurf.id} onClick={this.deleteSmurf} color="danger">Delete</Button>
                    </Card>
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