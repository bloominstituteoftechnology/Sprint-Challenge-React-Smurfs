import React, { Component } from 'react';
import Axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount() {
    Axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
    .catch(err => console.log(err));
  }

  createSmurf = (smurfs) => {
    console.log('smurfs', smurfs);
    this.setState({ smurfs: smurfs });
  }
  
  deleteSmurf = (id) => {
    Axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Show Village</NavLink>
          <span>     |     </span>
          <NavLink to='/smurf-form'>Add a Smurf</NavLink>
        </nav>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} onCreate={this.createSmurf} />} />
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>} />
      </div>
    );
  }
}

export default App;