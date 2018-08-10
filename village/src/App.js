import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const Header = () => {
  return(
    <div>
      <h1>Welcome to the Smurfs Village, guest. You're very welcomed here!</h1>
      <Link to="/">Village Entrace </Link><br/>
      <Link to="/smurfs">Check out the Smurfs Village!</Link>
    </div>
  )
};

const url = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  deleteSmurf = id => {
    axios.delete(`${url}/${id}`)
         .then(response => this.setState({smurfs: response.data}))
         .catch(err => console.log(err));
  };
  updateSmurf = id => {
    axios.put(`${url}/${id}`,{
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
          })
         .then(response => this.setState({smurfs: response.data}))
         .catch(err => console.log(err));
  };
  componentDidMount(){
    axios.get(`${url}`)
        .then(response => this.setState({smurfs: response.data}))
        .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/smurfs" render={(props) => 
            <div>
              <Smurfs {...props} smurfs={this.state.smurfs} delete={this.deleteSmurf} update={this.updateSmurf}/> 
              <SmurfForm /> 
            </div>
          }/>
        <div className="SmurfForm">
          <form onSubmit={this.updateSmurf}>
            <h3>To update, enter info in the field and click the update info button next the corresponding smurf(s)!</h3>
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
        </div>
      </div>
    );
  }
}

export default App;
