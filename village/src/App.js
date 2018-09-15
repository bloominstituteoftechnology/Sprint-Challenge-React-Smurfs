import React, { Component } from 'react';
import Axios from 'axios';
import {Route, withRouter} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataSource = 'http://localhost:3333/smurfs';
    this.state = {
      smurfs: [],
      editingSmurf: false,
      editSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      },
      viewSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    };
  };

  componentDidMount = () => {
    this.getSmurfs();
  };

  setSmurfs = (smurfsArr) => {
    this.setState({
      smurfs: smurfsArr,
      editingSmurf: false,
      editSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      },
      viewSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    });
    this.props.history.push('/');
  };

  handleSmurfEdit = (smurfId) => {
    this.setState({
      ...this.state,
      editSmurf: this.findSmurf(smurfId),
      editingSmurf: true
    });
    this.props.history.push('/smurf-form');
  };

  handleSmurfClick = (smurfId) => {
    this.setState({
      ...this.state,
      viewSmurf: this.findSmurf(smurfId)
    });
    this.props.history.push(`/smurf/${smurfId}`);
  };

  findSmurf = (smurfId) => {
    return this.state.smurfs.find( (element) => element.id === smurfId );
  };

  /* C */
  postSmurf = (newSmurf) => {
    if(newSmurf.name && newSmurf.age && newSmurf.height) {
      Axios
        .post(this.dataSource, newSmurf)
        .then( (response) => this.setSmurfs(response.data) )
        .catch( (err) => console.error(err) );
    }
  };

  /* R */
  getSmurfs = () => {
    Axios
      .get(this.dataSource)
      .then( (response) => this.setSmurfs(response.data) )
      .catch( (err) => console.error(err) );
  };

  /* U */
  putSmurf = (updatedSmurf, smurfId) => {
    if(updatedSmurf.name && updatedSmurf.age && updatedSmurf.height && smurfId) {
      Axios
        .put(`${this.dataSource}/${smurfId}`, updatedSmurf)
        .then( (response) => this.setSmurfs(response.data) )
        .catch( (err) => console.error(err) );
    }
  };

  /* D */
  deleteSmurf = (smurfId) => {
    Axios
      .delete(`${this.dataSource}/${smurfId}`)
      .then( (response) => this.setSmurfs(response.data) )
      .catch( (err) => console.error(err) );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route 
          exact 
          path='/' 
          render={() => 
            <Smurfs 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf} 
              handleSmurfEdit={this.handleSmurfEdit} 
              handleSmurfClick={this.handleSmurfClick} 
            />
          } 
        />
        <Route 
          path='/smurf-form' 
          render={(props) => 
            <SmurfForm 
              {...props} 
              smurf={this.state.editSmurf} 
              editingSmurf={this.state.editingSmurf} 
              postSmurf={this.postSmurf} 
              putSmurf={this.putSmurf} 
            />
          } 
        />
        <Route 
          path='/smurf/:id' 
          render={(props) => 
            <Smurf 
              {...props} 
              smurf={this.state.viewSmurf} 
              deleteSmurf={this.deleteSmurf} 
              handleSmurfEdit={this.handleSmurfEdit} 
              handleSmurfClick={this.handleSmurfClick} 
            />
          } 
        />
      </div>
    );
  };
};

export default withRouter(App);
