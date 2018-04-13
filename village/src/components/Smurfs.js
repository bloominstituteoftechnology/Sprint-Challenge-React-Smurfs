import React, { Component } from 'react';
import axios from "axios";
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state= {
      Edit: false,
    }
  }

  deleteFriend = (smurfId) => {
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => {
      this.props.fetchData()
    }).catch(err => {
      console.log(err)
    })
   }

   showEdit = (smurfId) => {
     this.setState({
       Edit: !this.state.Edit
     })
   }

   updateSmurf = (smurfId) => {
     const smurf = {}
    if(this.props.smurfs[smurfId].name !== "") {
      smurf.name= this.state.name
    }
    if(this.props.smurfs[smurfId].height !== "") {
      smurf.height= this.state.height
    }
    if(this.props.smurfs[smurfId].age !== "") {
      smurf.age= this.state.age
    }
    console.log(this.props.smurfs[smurfId]);
    console.log(smurf)
   }

   handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <button onClick={() => this.deleteFriend(smurf.id)}>Delete me</button>
              <button onClick={() => this.showEdit(smurf.id)}>Edit</button>

              {this.state.Edit ? 
              <div>
                <input type="text" onChange={this.handleInputChange} value={this.state.name} placeholder="Name" name="name"/>
                <input type="text" onChange={this.handleInputChange} value={this.state.height} placeholder="Height" name="height"/>
                <input type="text" onChange={this.handleInputChange} value={this.state.age} placeholder="Age" name="age"/>
                <button onClick={() => this.updateSmurf(smurf.id)}>Update</button>
              </div>: null}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
