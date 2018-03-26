import React, { Component } from 'react';
import  axios  from 'axios';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';


class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  state = {
    smurfs: [],
    name:'',
    age:'',
    height:'',

  }

  getSmurfs = this.getSmurfs.bind(this);
  deleteSmurf = this.deleteSmurf.bind(this);

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs() {
    axios
    .get('http://localhost:3333/smurfs')
    .then (response =>  response.data)
    .then (smurfs => { this.setState({smurfs}) })
    .catch(error => {console.error(`Server Error: ${error}`)
  });
  }

  deleteSmurf(id) {
    console.log(id)
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then ( () => { this.getSmurfs(); } );
  }

  render() {
    return (
      <div className="Smurfs">
      <h3> Welcome to the Whole Village, Lets meet the Gang! </h3>
      <br></br>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf deleteSmurf={this.deleteSmurf} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;  
        })}
       </ul> 
       <hr></hr>
     <p> Dont See Any Smurfs? :( </p>
     <button style={{background: "pink"}} > <Link to="/addSmurf" style={{textDecoration: "none", color: "Blue"}}> Add New Smurf ! </Link> </button>
      </div>
    );

  }


}

  

    

export default Smurfs;