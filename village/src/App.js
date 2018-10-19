import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, Link} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
        <Route path="/smurf-form" component={SmurfForm}/>
        {/*<SmurfForm />*/}
        {/*<Smurfs smurfs={this.state.smurfs} />*/}
      </div>
    );
  }
}

export default App;
