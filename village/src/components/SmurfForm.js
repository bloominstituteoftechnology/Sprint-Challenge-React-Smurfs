import React, { Component } from 'react';
import axios from 'axios'
class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
  }

  deleteSmurf= id => {
    // event.preventDefault();
    const deleteId = `http://localhost:3333/smurfs/:${id}`;
    // const deleteId= this.props.match.params.id;
    console.log("Delete",deleteId) //Returns Object 
    axios.delete(`http://localhost:3333/smurfs/:${deleteId}`)
    .then(response=> {
      this.setState({sumrfs:response.data});
      console.log(response)
    })
    .catch(()=> {
      console.error('error deleting');
    });
  };


  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    const name = this.state.name;
    const age = this.state.age;
    const height = this.state.height;
    axios.post('http://localhost:3333/smurfs', {name,age,height})
    .then (Response=> {
      this.setState(() => ({sumrfs:Response.data}));
    })
    .catch(error => {
      console.error('Server Error', error);
    });

     
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
          <button onClick={this.deleteSmurf} type="submit">Delete smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;