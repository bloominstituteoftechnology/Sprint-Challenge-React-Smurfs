import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  handleSyncingDB = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => response.data)
    .then(data => this.setState({ smurfs: data }))
    .catch(e => console.error(e));
  }

  handleDelete = (e) => {
    const id = e.target.parentNode.dataset.id;

    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .catch(e => console.error(e))
      .finally(() => this.handleSyncingDB())
    ;
  }

  componentDidMount() {
    this.handleSyncingDB();
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/form" >Add Smurfs</NavLink>
        <NavLink to="/smurfs" >Smurfs</NavLink>

        <Route exact path="/form" render={ props => <SmurfForm handleSyncingDB={this.handleSyncingDB} {...props} />} />
        <Route path="/smurfs" render={ props => <Smurfs smurfs={this.state.smurfs} handleDelete={this.handleDelete} handleSyncingDB={this.handleSyncingDB} {...props} />} />
      </div>
    );
  }
}

export default App;
