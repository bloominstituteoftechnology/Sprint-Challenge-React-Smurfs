import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      smurfAmount: 10

    };
  }

  addSmurf = event => {
    if (event){event.preventDefault();}
    // add code to create the smurf using the api
    axios
      .post("http://127.0.0.1:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(response => {
        console.log(response);
        this.props.updateParentState(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  modSmurf = event => {
    console.log(event)
    if (event){event.preventDefault();}
    // add code to create the smurf using the api
    axios
      .put(`http://127.0.0.1:3333/smurfs/${this.props.match.params.id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(response => {
        console.log(response);
        this.props.updateParentState(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      name: "",
      age: "",
      height: "",
    });
  };

  repopulate = ()=>{
    axios
      .get(`https://randomuser.me/api/?results=${this.state.smurfAmount}`)
      .then(response => {

        response.data.results.forEach(element => {
          this.setState({
     
      name: `${element.name.first} ${element.name.last}`,
      age: element.dob.age * 4,
      height: Math.floor(element.dob.age / 10) + 5,
          })
          this.addSmurf();
        });
        
      })
      .catch(err => {
        console.log(err);
      });
   
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form
          onSubmit={this.props.match.params.id ? this.modSmurf : this.addSmurf}
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">
            {this.props.match.params.id ? "Edit Smurf" : "Add to the village"}
          </button>
        </form>
        <input value='10' type='number' onChange={this.handleInputChange}             name="smurfAmount"
 />
        <button onClick={this.repopulate} > Repopulate </button>
      </div>
    );
  }
}

export default SmurfForm;
