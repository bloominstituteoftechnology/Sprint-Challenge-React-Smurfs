import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      smurfs: [],
    };
  }
  
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

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  //nothing is REFRESHING GAAAHHH
  // addNewSmurf(event, data) {
  //   event.preventDefault();
  //   axios.post("http://localhost:3333/smurfs", data)
  //   .then(response => {console.log(response);
  //   this.setState({smurfs: response.data})
    
  //   });


  // }


  render() {
    return (
      <div className="App">
        <div className="Navbar">
        <NavLink exact to={"/"} ><span>HOME</span></NavLink>
        <NavLink to={"/form"} ><span>FORM</span></NavLink>
        </div>
        <Route path="/form"   render={props => (<SmurfForm {...props} smurfs={this.state.smurfs} />) } />
        <Route exact path="/" render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)}/>
      </div>
    );
  }
}

export default App;
