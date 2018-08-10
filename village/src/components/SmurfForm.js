import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      smurfs: [] 
    };
  }

  addSmurf = (e) => {
   e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

  axios
  .post("http://localhost:3333/smurfs", newSmurf)
  .then(response => {
    console.log('this is axios.post response', response.data) 
      this.setState({
        smurfs: response.data
    })
  })
  .catch((err) => console.log(err))
}

getSmurfId = (e) => {
  e.prevenDefault();
  let id = null;
  if(this.state.smurfs.name === this.state.name) {
    id = this.state.smurfs.id;
    return id; 

  }

  console.log(id);
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(response => {
    this.setState(() => ({ friend: response.data }));
  })
  .catch(error => {
    console.error(error);
  });


}


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <button type="submit">Add to the village</button>
        </form>

        <form onSubmit={this.getSmurfId}>
            <button type="submit">Delete</button> 
        </form>
      </div>
    );
  }
}

export default SmurfForm;
