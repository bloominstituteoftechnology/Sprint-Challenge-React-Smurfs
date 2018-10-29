import React, { Component } from 'react';
import axios from "axios";

class SmurfUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  componentDidMount() {
    
   

console.log("in update did mount:", this.state)
    this.setState(() => ({
  name: this.state.name, 
  age: this.state.age,
  height: this.state.height,
  //id: this.state.id

}) )

  }
  
  
  
  
  
  putSmurf = event => {
    event.preventDefault();

    const id = this.props.match.params.id;
    // add code to create the smurf using the api
   /*  axios.post('http://localhost:3333/smurfs', { */
  // const newIndex = 3;
   console.log("the id", id)
        let webUrl = `http://localhost:3333/smurfs/${id}`;
    axios.put(webUrl, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      //id: this.state.id
    })
      .then(response => {
       
        this.setState(() => ({ smurfs: response.data }));
        console.log("in the addSmurf", this.state)
      })
      .catch(error => {
        console.log(error);
      });
      /********************************* */
    this.setState({
      name: '',
      age: '',
      height: '',
      id: '' 
    });
    window.location.reload();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("this.state: ", this.state)
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.putSmurf}>
        <p className="update-header">Currently Updating Smurf with id: {this.props.match.params.id}</p>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          className="input"
         />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            className="input"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            className="input"
          />
           <input
            onChange={this.handleInputChange}
            placeholder="id"
            value={this.state.id}
            name="id"
            className="input"
          />
          <button className="button-submit" type="submit">Update the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfUpdate;