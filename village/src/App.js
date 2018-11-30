import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import { Container, Menu, Input } from 'semantic-ui-react';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfDetail from './components/SmurfDetail';

const URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      filterTerm: '',
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then( res => this.setState({
        smurfs: res.data,
      }))
      .catch( err => console.log(`Error: ${err}`) )
  }

  addSmurf = smurf => {
    axios
      .post(URL, smurf)
      .then ( res => this.setState({
        smurfs: res.data,
      }))
      .catch( err => console.log(`Error: ${err}`) )
  }

  removeSmurf = id => {
    axios
      .delete(`${URL}/${id}`)
      .then( res => this.setState({
        smurfs: res.data,
      }))
      .catch( err => console.log(`Error: ${err}`) )
  }

  updateSmurf = (smurf, id) => {
    axios
    .put(`${URL}/${id}`, smurf)
    .then( res => this.setState({
      smurfs: res.data,
    }))
    .catch( err => console.log(`Error: ${err}`))
  }

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    // filter smurf based on filterTerm
    const filteredSmurf = this.state.smurfs.filter(
      smurf => smurf.name.toLowerCase().includes(this.state.filterTerm.toLocaleLowerCase())
    );
    return (
      <Container className="App">

        {/* add navigation */}
        <Menu pointing>
          <NavLink className="item" exact to='/' >Smurf Village</NavLink>
          <NavLink className="item" to='/smurf-form' >Add Smurf</NavLink>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                name='filterTerm'
                onChange={this.handleSearch} icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {/* add routes */}
        <Route exact path='/' render={ props => (
          <Smurfs
            {...props}
            smurfs={filteredSmurf}
            removeSmurf={this.removeSmurf}
          /> )}
        />
        <Route exact path='/smurf-form' render={ props => (
          <SmurfForm
            {...props}
            handleSubmit={this.addSmurf}
          /> )}
        />
        <Route exact path='/smurf-update/:id' render={ props => (
          <SmurfForm
            update
            {...props}
            smurfs={this.state.smurfs}
            handleSubmit={this.updateSmurf}
          /> )} 
        />
        <Route path='/smurf/:id' render={ props => (
          <SmurfDetail
            {...props}
            smurfs={this.state.smurfs}
          /> )} 
        />
      </Container>
    );
  }
}

export default App;
