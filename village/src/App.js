import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome';
import SmurfForm from './components/SmurfForm';
import SmurfCard from './components/SmurfCard';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      errorMessage: null
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
         .then(response => {
            this.setState({
                smurfs: response.data,
                errorMessage: null
            });
         })
         .catch( error => {
              this.setState({ errorMessage: "Error: There is some error getting smurfs"})
              setTimeout( () => {
                 this.setState({ errorMessage: null})
              }, 2500)
            }
         )
  }
  
  addSmurfForm = (formData) => {
     this.setState({ smurfs: formData })
  }

updateSmurfHandler = (smurf) => {
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf )
     .then(response => {
         this.setState({
            smurfs :response.data
         }) 
     })
     .catch( error => console.log(error))
     console.log("working");
 }

deleteSmurf = (id) => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
           .then( response => {
               this.setState( {smurfs: response.data})
           })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {

    return (
      <div className="App">
        <Route exact path="/" component={Welcome} />
        {this.state.errorMessage !== null ? (<h3>{this.state.errorMessage}</h3>) : null}
        <nav>
         <NavLink to='/'>Show Village</NavLink>
         {"   |  "}        
        <NavLink to='/smurf-form'>Add a Smurf</NavLink>
       </nav>
        <Route path = "/smurf-form" render = { props => <SmurfForm {...props} addSmurfForm={this.addSmurfForm} smurfs={this.state.smurfs}/> } />
        {/* <SmurfForm addSmurf={this.addSmurf} /> */}
        <Route exact path ="/" render = { props => <Smurfs smurfs ={this.state.smurfs} 
                                                           deleteSmurf={this.deleteSmurf}
                                                           updateSmurfHandler={this.updateSmurfHandler} /> } />
        {/* <Smurfs smurfs={this.state.smurfs} />
      */}
        <Route path = "/smurfs/:id" render={ props => <SmurfCard className="Smurf" {...props} smurfs={this.state.smurfs} />} />
       </div>
    );
  }
}

export default App;
