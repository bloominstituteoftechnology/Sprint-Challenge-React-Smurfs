import React, { Component } from 'react';
import axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: '',
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

getSmurffed = (e) => {
  e.preventDefault();

 this.state.smurfs.map(smurf => {
   
 if(smurf.name === this.state.name) {
   let x = this.setState({id: smurf.id})
    return x;
  }

 });

axios
.delete(`http://localhost:3333/friends/${this.state.id}`)
.then(response => {
  console.log('this is the axios delete response', response.data);

  this.setState(() => ({ smurfs: response.data }));
})
.catch(error => {
  console.error(error);
});

}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    console.log('this is the this.state.smurfs.name', this.state.smurfs.name);

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

        <form onSubmit={this.getSmurffed}>
            <button type="submit">Delete</button> 
        </form>

 
      </div>
    );
  }
}


export default SmurfForm;
