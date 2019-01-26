import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import PersonalPage from './components/PersonalPage';
import { Route, NavLink } from 'react-router-dom';


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
 //GET
  componentDidMount() {


    axios

      .get("http://localhost:3333/smurfs")

      .then(response => {
       console.log(response);
       this.setState({ smurfs: response.data });
     })

      .catch(err => {
       console.log(err);
     });
 }

  addSmurfListOnServer = smurfData => {
    this.setState({smurfs: smurfData});
}

//DELETE
  deleteSmurfFromServer = id => {
    axios

    .delete(`http://localhost:3333/smurfs/${id}`)

    .then(response => {
     console.log(response);
     this.setState({ smurfs: response.data });
   })

    .catch(err => {
     console.log(err);
   });  
  }
  
//PUT

postSmurfFromServer = (smurf, id) => {
  axios

  .put(`http://localhost:3333/smurfs/${id}`, smurf)

  .then(response => {
   console.log(response);
   this.setState({ smurfs: response.data });
 })

  .catch(err => {
   console.log(err);
 });  
}

  render() {
    return (
      <div className="App">
      <div className="navBar">
      <NavLink to="/smurf-form">Smurf Form</NavLink>
      <NavLink exact to="/">Smurfs</NavLink> 
      </div>
        <Route 
          path ="/smurf-form"
           render={props=>
            <SmurfForm {...props} smurfs={this.state.smurfs} addSmurfListOnServer={this.addSmurfListOnServer}/> } />
        
        <Route 
          exact path ="/"
          render ={props =>
          <Smurfs  {...props} smurfs={this.state.smurfs} deleteSmurfFromServer={this.deleteSmurfFromServer} /> } />
        <Route
          path="/smurfs/:id"
          render={props =>
            <PersonalPage {...props} smurfs={this.state.smurfs}
          postSmurfFromServer={this.postSmurfFromServer} /> } />
      

      </div>
    );
  }
}

export default App;
