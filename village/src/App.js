import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      collapsed: true,
    };
  }

  toggleNavbar = () => this.setState({
    collapsed: !this.state.collapsed
    });
  

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({
      smurfs: [...response.data]
    }))
    .catch(err => console.error(err))
  }

  smurfsPost = smurf => axios.post('http://localhost:3333/smurfs', smurf)
  .then(response => this.setState({
    smurfs: [...response.data]
  }))
  .catch(err => console.error(err))
  
  deleteSmurf = id => axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => this.setState({
    smurfs: [...response.data]
  }))
  .catch(err => console.error(err))

  updateSmurf = (smurf, id) => axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
  .then(response => this.setState({
    smurfs: [...response.data]
  }))
  .catch(err => console.error(err))
  
  render() {
    return (
      <div className="App">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">React Smurfs</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" onClick={this.toggleNavbar}>Smurfs Village</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/smurf-form" onClick={this.toggleNavbar}>Add New Smurf</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/smurf-update-form" onClick={this.toggleNavbar}>Update a Smurf</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} updateSmurf={this.updateSmurf} />} />
          <Route path="/smurf-form" render={props => <SmurfForm {...props} smurfsPost={this.smurfsPost} />} />
      </div>
    );
  }
}

export default App;
