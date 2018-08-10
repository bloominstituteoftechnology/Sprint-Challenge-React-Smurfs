import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateSmurf from './components/UpdateSmurf';
import SingleSmurf from './components/SingleSmurf';
import { Button } from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    let url = 'http://localhost:3333/smurfs';
    axios.get(url)
      .then(res => {
        this.setState({smurfs:res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDelete = (id) => {
    let url = 'http://localhost:3333/smurfs';
    axios.delete(`${url}/${id}`)
      .then(res => {
        this.setState({smurfs: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/add" component={SmurfForm} />
        <Route exact path="/smurfs" render={props => (
          <Smurfs {...props} smurfs={this.state.smurfs} handleDelete={this.handleDelete} />
        )} />
        <Route path="/smurfs/:id" render={props => (
          <UpdateSmurf {...props} smurfs={this.state.smurfs} handleDelete={this.handleDelete} />
        )} />
        <Route path="/smurf/:id" render={props => (
          <SingleSmurf {...props} smurfs={this.state.smurfs} handleDelete={this.handleDelete} />
        )} />
      </div>
    );
  }
}

const Home = () => {
  return (
    <div className="home">
      <h1> Welcome to Smurf Village! </h1>
      <Link to="/smurfs"><Button> Enter! </Button></Link>
      <Link to="/add"><Button> Join us! </Button></Link>
    </div>
  )
}

export default App;
