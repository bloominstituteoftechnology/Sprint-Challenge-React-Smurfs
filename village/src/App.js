import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {NavLink, Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import Profile from './components/SmurfProfile/Profile.js';
import ProfileLanding from './components/SmurfProfile/ProfileLanding.js';

const URL = 'http://localhost:3333/smurfs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    this.getSmurfData('');
  }

  getSmurfData = (param) => {
    return axios.get(`${URL}/${param}`)
    .then((res)=>{
      this.setSmurfDataToState(res.data);
    })
    .catch((err)=> console.log('SMURF ERR', err));
  }

  setSmurfDataToState = (data) => {
    this.setState({ smurfs: data });
  }

  addNewSmurf = (input) => {
    axios.post( URL, {
      name: input.name,
      age: input.age,
      height: input.height,
    })
    .then((res)=>{
      this.setSmurfDataToState(res.data);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="profile-container">
          <Route exact path="/" component={ProfileLanding} />
          <Route path="/:smurf" component={Profile} />
        </div>
        <div className="form-list">
          <SmurfForm addNewSmurf={this.addNewSmurf}/>
          <Smurfs smurfs={this.state.smurfs} />
        </div>
      </div>
    );
  }
}

const ProfileContainer = styled.div`
  width:50%;
  display:flex;
  flex-flow:column;
`;

const FormList = styled.div`
  width:50%;
  display:flex;
  flex-flow:column;
`;

export default App;
