import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      this.setState({smurfs: res.data});
    })
  }

  setSmurf = (data) => {
    this.setState({
      smurfs: data,
    })
  }



render() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className='nav'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/smurf-form'>Create</NavLink>
          </li>
        </ul>

        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} addSmurf={this.setSmurf} />} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
