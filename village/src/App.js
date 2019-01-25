import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import IndividualSmurf from './components/IndividualSmurf';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      maxId: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.loadSmurfs();
  }
  
  onSmurfAddedButtonClick = () => {
    this.loadSmurfs();
  }
  
  loadSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      let maxId = response.data[response.data.length-1].id+1;
      console.log("maxId: " + maxId);
      this.setState(() => ({ 
        smurfs: response.data,
        maxId: maxId,
        loading: false
      }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }


  render() {
    if(this.state.loading){
      return <p>loading</p> 
    }
    console.log('render, maxId: ' + this.state.maxId);
    return (
      <div className="App">
        <SmurfForm maxId={this.state.maxId} onClick={this.onSmurfAddedButtonClick} />
        <Route exact path="/" render={()=> <Smurfs smurfs={this.state.smurfs} />} />
        <Route path="/smurfs/:id" component={IndividualSmurf} smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
