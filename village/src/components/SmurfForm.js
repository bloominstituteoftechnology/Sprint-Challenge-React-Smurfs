import React from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     smurf: {
       name:"",
       age:"",
       height:"",
     }
    }
  }

  addSmurf = event => {
    // add code to create the smurf using the api
    event.preventDefault()
    axios
    .post("http://localhost:333/smurfs")
    .then(response =>{
      console.log(response)
     this.setState({
       smurfs:response.data,
      })
    })
    .catch(error => console.log(error))
  }

 
  render() {
    return (
      <div className="SmurfForm">
      <h1>Add a New Smurf</h1>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Click Here to Submit</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
