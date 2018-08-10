import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'; 
import {NavLink, Route} from 'react-router-dom'; 

const url = "http://localhost:3333/smurfs"; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],

    };
  }
  componentDidMount(){
    axios
      .get(url)
        .then(response => {
          console.log(response);
          this.setState({
            smurfs: response.data
          });
        })
        .catch(err => console.log(err));
    }
    
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <div className="navbar">
      <div>
        <NavLink to="/">
        Welcome
        </NavLink>
        </div>
        <div>
        <NavLink to="/village">
        Village
        </NavLink>
        </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route 
        path="/village"
        render ={props =><Smurfs {...props} smurfs={this.state.smurfs}/>
        }/>
         <Route 
        path="/village"
        render ={props =><SmurfForm />
        }/>
      </div>
    );
  }
}

function Home() {
  return(
    <div>
      <h1>Welcome to smurf village </h1>
      </div>
  )
}


export default App;
