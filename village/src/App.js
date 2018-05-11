import React, { Component } from 'react';
import './App.css';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import SmurfForm from './components/SmurfForm';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount = () => {
    this.fetch()
  }

  updateSmurf = id => {
    axios.put(`http://localhost:3333/smurfs/${id}`, { name: this.state.name, age: this.state.age, height: this.state.height })
      .then(() => this.fetch())
      .catch(err => console.log(err));
  }

  fetch = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(data => this.setState({
        smurfs: data.data,
        name: '',
        age: '',
        height: '',
        modal: false
      }))
      .catch(err => console.log(err));
  }

  addSmurf = event => {
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', { name: this.state.name, age: this.state.age, height: this.state.height })
      .then(() => this.fetch())
      .catch(err => console.log(err));
  }

  deleteSmurf = id => {
    console.log(id)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((data) => this.fetch())
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <Link className="btn btn-secondary btn-sm" onClick={this.toggle} to="/addfriend">Want more Smurfs?!</Link>
        <Link className="btn btn-secondary btn-sm" to="/update">Update a Smurf?!</Link>
        <div className="smurf-list">
          <Route path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} function={this.deleteSmurf} function2={this.updateSmurf} />} />
        </div>
        <Route path="/movies/:id" render={(props) => <Smurf {...props} />} />
        <Route exact path="/update" render={(props) => <SmurfForm {...props} onChange={this.handleInputChange} onSubmit={this.addSmurf} />} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a Smurf</ModalHeader>
          <ModalBody>
            <div className="smurf-form container-fluid">
              <form>
                <input
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="name"
                  value={this.state.name}
                  name="name"
                  type="name"
                />
                <input
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="age"
                  value={this.state.age}
                  name="age"
                  type="age"
                />
                <input
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="height"
                  value={this.state.height}
                  name="height"
                  type="number"
                />
                <Link to="/" className="btn btn-secondary modal-button" onClick={this.addSmurf} type="submit">Add to the village</Link>
              </form>
            </div>
          </ModalBody>
        </Modal>

      </div>
    );
  }
}

export default App;
