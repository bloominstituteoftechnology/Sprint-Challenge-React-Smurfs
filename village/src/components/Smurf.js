import React, { Component } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';
import { Redirect } from 'react-router-dom';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {},
      deleted: false,
      name: '',
      age: null,
      height: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchSmurf(id);
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  fetchSmurf = (id) => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        this.setState(() => ({smurf: res.data, name:res.data.name, age:res.data.age, height:res.data.height}))
      })
      .catch(err => console.log(err))
  }

  updateSmurf = () => {
    const id = this.state.smurf.id;
    const updatedSmurf = {
      name: this.state.name, 
      age: this.state.age, 
      height: this.state.height}
    axios
      .put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
      .then(() => {this.setState({name:'',age:null,height:null})})
      .catch(err => console.log(err))
  }

  deleteSmurf = () => {
    const id = this.state.smurf.id;
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(resp => this.setState({deleted: true}))
      .catch(err => console.log(err))
  }

  render() {
    return (this.state.deleted ? (
        <Redirect to="/smurfs"/>
      ) : (
        <div className="single-smurf">
          <SmurfCard 
            name={this.state.smurf.name}
            age={this.state.smurf.age}
            height={this.state.smurf.height}
            id={this.state.smurf.id}
          />
          <div className="update-delete">
            <h2>Update Smurf Information</h2>
            <form className="smurf-form">
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
              
            </form>
            <div className="btns">
              <button onClick={this.updateSmurf} className="update btn">Update</button>
              <button onClick={this.deleteSmurf} className="delete btn">Delete</button>
            </div>
          </div>
        </div>
      )
    )
  }
}
 
export default Smurf;

