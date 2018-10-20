import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props){
    super(props);
    this.url = 'http://localhost:3333/smurfs'
    this.state = {
      smurfs: [],
      smurf: {
        id: null,
        name: '',
        age: '',
        height: '',
      },
      editingId: null,
      isEditing: false,
      activeSmurf: null,
    }
  }
    componentDidMount(){
      axios
        .get(this.url)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Problem!', response.data);
        })
    }

      handleInputChange = e => {
        this.setState({
          smurf: {
            ...this.state.smurf,
            [e.target.name]: e.target.value
          }
          });
      };

    makeSmurf = smurf => {
      axios
        .post(this.url, this.state.smurf)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Could not add Smurf!', response.data)
        })
    }


    deleteSmurf =  id => {
      axios
        .delete(`${this.url}/${id}`)
        .then(response => {
          this.setState({
            smurfs: response.data
          })
        })
        .catch(response => {
          console.log('Could not delete Smurf!', response.data)
        })
    }

    editSmurf = ()=> {
      axios
        .put(`${this.url}/${this.state.editingId}`, this.state.smurf)
        .then(response => {
          this.setState({
            smurfs: response.data,
            editingId: null,
            isEditing: false,
            smurf: {
              id: null,
              name: '',
              age: '',
              height: '',
            }
          })
        })
        .catch(response => {
          console.log('Could not edit Smurf!', response.data)
        })
    }

    setUpForm = (event, smurf) => {
      event.preventDefault();
      this.setState({
        smurf,
        isEditing: true,
        editingId: smurf.id,
      })
    }


  render() {
    if (this.state.smurfs.length === 0) {
      return(
        <h1>Loading...</h1>
      )
    }
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' component={Welcome} />
        <Route exact path='/village' render={(props) => (
          <Smurfs {...props} smurfs={this.state.smurfs}
          setUpForm={this.setUpForm}
        deleteSmurf={this.deleteSmurf} />)} />
        <Route path='/smurf-form' render={(props) => (
          <SmurfForm {...props} chooseSmurf={this.chooseSmurf}
            smurf={this.state.smurf} makeSmurf={this.makeSmurf} handleInputChange={this.handleInputChange}
          isEditing={this.state.isEditing}
        editSmurf={this.editSmurf} />)} />
      </div>
    );
  }
}

export default App;
