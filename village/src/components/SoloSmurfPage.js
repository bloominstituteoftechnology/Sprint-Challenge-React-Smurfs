import React, { Component } from "react";
import axios from "axios";
import SmurfNav from './SmurfNav';

class SoloSmurfPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: [],
      matchingSmurf: [],
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    this.fetchSmurf(id);
  }
  fetchSmurf(id) {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState(() => ({ smurf: response.data }));
        console.log(response.data);
        console.log(this.state.smurfs.name + "this is state");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
      return(
        <div className="Smurf">
        <SmurfNav />
      <h3>{this.state.smurf.name}</h3>
      <strong>{this.state.smurf.height} tall</strong>
      <p>{this.state.smurf.age} smurf years old</p>
    </div>  
      )
  }
}

export default SoloSmurfPage;