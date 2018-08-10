import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header'
import Delete from './components/Delete'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  componentDidUpdate(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState(() => ({ smurfs: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }
  handleDelete = (event) => {    
    event.preventDefault();
    
    const id = this.props.match.params.id;        
    console.log(id)
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      this.setState({          
      smurfs: response.data
      })
    })
    .catch((err) => console.log(err))
  } 
  render() {
    return (
      <div className="App">
        <Route exact path = "/village/:id" render = {(props) =>
          <Delete {...props} 
            handleDelete = {this.handleDelete}
            smurfs={this.state.smurfs}
          />
        } />
        <Route exact path = "/" component = {Header} />
        <Route exact path = "/village" component = {SmurfForm} />
        <Route path = "/village" render = {(props) =>
          <Smurfs {...props} 
            smurfs={this.state.smurfs}             
          />
        }/>        
      </div>
    );
  }
}

export default App;
