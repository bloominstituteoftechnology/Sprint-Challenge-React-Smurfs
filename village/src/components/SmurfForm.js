import React, { Component } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import '../App.css';

const smurfData = 'http://localhost:3333/smurfs';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      deleteId: '',
      updateId: '',
      updateName: '',
      smurfs: this.props.smurfs
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = event => {
    //console.log(this.state.smurfs, this.props.smurfs)
    //event.preventDefault();
    // add code to create the smurf using the api
    axios.post(smurfData, {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: this.state.height
    })
    .then(response => {
      // axios.get(smurfData).then(response => {
      //   this.setState({smurfs: response.data});
      // });
      this.setState({smurfs: response.data});
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  deleteSmurf = (e) => {
    //e.preventDefault();
    let chooseId = this.state.deleteId;
    axios.delete(`http://localhost:3333/smurfs/${chooseId}`)
    .then(response => {
      this.setState({smurfs: response.data});
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({deleteId: '', smurfs: this.props.smurfs})
  }

  editSmurf = (e) => {
    //e.preventDefault();
    let chooseId = this.state.updateId;
    let updateName = this.state.updateName;
    axios.put(`http://localhost:3333/smurfs/${chooseId}`, {name: updateName})
    .then(response => {
      this.setState({smurfs: response.data});
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({updateId: '', updateName: '', smurfs: this.props.smurfs})
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink exact className="nav-item" activeClassName="selected" to="/">Home</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to="/smurfs">Village</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to="/smurf-counsel">Smurf Counsel</NavLink>
        </nav>
        <h1>Welcome To Smurf Counsel</h1>
        <h2>Here you have the power</h2>
        <hr />
        <h2>Smurfs currently living in the village:</h2>
        <div className="counsel-smurf-container">
          {this.props.smurfs.map((smurf, index) => {
            return (
              <div className="Smurf" key={index}>
                <h3>Name: {smurf.name}</h3>
                <strong>Id: {smurf.id}</strong>
              </div>
            );
          })}
        </div>
        <hr />
        <section>
          <h3>Add A Smurf to the Village</h3>
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
        </section>
        <section>
          <h3>Remove A Smurf From the Village</h3>
          <form onSubmit={this.deleteSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="id"
              value={this.state.deleteId}
              name="deleteId"
            />
            <button type="submit">Remove Smurf</button>
          </form>
        </section>
        <section>
          <h3>Update the Name of A Smurf</h3>
          <form onSubmit={this.editSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="id"
              value={this.state.updateId}
              name="updateId"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.updateName}
              name="updateName"
            />
            <button type="submit">Edit Smurf</button>
          </form>
        </section>
      </div>
    );
  }
}

export default SmurfForm;
