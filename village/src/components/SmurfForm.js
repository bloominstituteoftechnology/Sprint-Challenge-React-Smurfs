import React, { Component } from 'react';
import axios from 'axios';



class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
      const newSmurf = this.state;
      axios
      .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
          const smurfs = res.data;
          this.setState({ smurfs });
        })
        .catch(err => console.log(err))
    

      this.setState({
        name: '',
        age: '',
        height: ''
      });
      window.location.reload();
  }


  deleteSmurf = (id) => {
    id = this.state.id;
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
          console.log(response);
      })
      .catch(err => {
          console.log(err);
      })

      this.setState({
        id: '',
        name: '',
        age: '',
        height: ''
      });
      window.location.reload();
  }


  updateSmurf = (id, smurfData) => {
    id = this.state.id
    smurfData = this.state;
    axios
    .put(`http://loclahost:3333/smurfs/${id}`, smurfData)
    .then(res => {
      const smurf = res.data;
      this.setState({smurf});
    })
    .catch(err => console.log(err));

    window.location.reload();
  }



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
          <input
          onChange={this.handleInputChange}
          placeholder="id"
          value={this.state.id}
          name="id"
          />
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
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
          <button type="submit" onClick={this.deleteSmurf}>Delete Smurf</button>
          <button type="submit" onClick={this.updateSmurf}>Update Smurf</button>
      
      </div>
    );
  }
}

export default SmurfForm;
