import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';


class Smurfs extends Component {
  state = {
    smurfs: [],
    name: '',
    age: '',
    height: '',
  }

  deleteSmurf = this.deleteSmurf.bind(this);
  getSmurfs = this.getSmurfs.bind(this);

  componentDidMount() {
    this.getSmurfs();
  } 

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data}))

    .catch(error => {
      console.log(`Error retrieving smurfs: ${error}`)
    })
  }

  deleteSmurf(id) {
    console.log(id);
  
      axios.delete(`http://localhost:3333/smurfs/${id}` )
  
      .then((response) => {
        this.setState({ smurfs: response.data });
      })
        
      .catch(error => {
        console.log(error);
      })
  } 

  render() {
    return (
      <div className="Smurfs">
      {console.log(this.state.smurfs)}
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} fam={Smurfs} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;