import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Smurf from './components/Smurf';
import SmurfForm from './components/SmurfForm';
import SmurfList from './components/SmurfList';

const blnfrm = {
  name: '',
  age: Number,
  height: ''
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfData: [],
      smurf: {
        id: Number,
        name: '',
        age: Number,
        height: ''
      },
      sltupdt: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios 
        .get("http://localhost:3333/smurfs")
        .then(response => {
          this.setState({
            smurfData: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
  }

  handleInputChange = event => {
    this.setState({ 
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
     });
  };

  addSmurf = event => {
    // add code to create the smurf using the api
    axios
        .post("http://localhost:3333/smurfs", this.state.smurf)
        .then((response) => {
          this.setState({
            smurfData: response.data, smurf: blnfrm
          });
        })
        .then((response) => {
          this.props.history.push("/smurfs");
        })
        .catch(err => {
          console.log(err);
        })
  }

  removeSmurf = smfid => {
    return axios 
               .delete(`http://localhost:3333/smurfs/${smfid}`)
               .then((response) => this.setState({
                 smurfData: response.data
               }));
  }

  rdrtfrm = (event, id) => {
    event.preventDefault();
    const smfupdt = this.state.smurfData.find(smurf => smurf.id == id);
    this.setState({
      sltupdt: true, smurf: smfupdt
    }, () => this.props.history.push("/smurf-form"));
  }

  updateSmurf = smfid => {
    axios
        .put(`http://localhost:3333/smurfs/${smfid}`, this.state.smurf)
        .then((response) => {
          this.setState({
            smurfData: response.data,
            smurf: blnfrm,
            sltupdt: false
          });
          this.props.history.push(`/smurfs/${smfid}`);
        })
  }

  render() {
    return (
      <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Outskirts of Town
          </NavLink>
        </li>
        <li>
          <NavLink to="/smurfs" activeClassName="activeNavButton">
            Smurf Village
          </NavLink>
        </li>
        <li>
          <NavLink to="/smurf-form" activeClassName="activeNavButton">
            Join the Community
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={Header} />
      <Route exact path="/smurfs" render={props => (<SmurfList {...props} list={this.state.smurfData} />)} />
      <Route path="/smurfs/:smfid" render={props => (<Smurf {...props} list={this.state.smurfData} rmsmf={this.removeSmurf} rdrtfrm={this.rdrtfrm} />)} />
      <Route path="/smurf-form" render={props => (<SmurfForm {...props} smf={this.state.smurf} adsmf={this.addSmurf} handleChange={this.handleInputChange} updtsmf={this.updateSmurf} sltupdt={this.state.sltupdt} />)} />
      </div>
    );
  }
}

export default withRouter(App);
