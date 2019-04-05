import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import {NavLink} from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    // pulls in my data to set my intial state
     axios.get('http://localhost:3333/smurfs')
     .then((res) =>{
         // .then uses the resquest for data and sets my state. 
         this.setState({
             smurfs: res.data
         })
     })
     .catch((err =>{
        console.log('Oops I did it again', err)
     }))
    }
     
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div>
      <div>

      <nav>
    <NavLink to="/" activeClassName="activeNavButton">
      Smurfs
    </NavLink>
 

    <NavLink to="/smurf-form" activeClassName="activeNavButton">
      SmurfForm
    </NavLink>

    </nav>



      </div>
      <div className="App">
        <Route  exact path ='/smurf-form' component={SmurfForm}/>
        <Route   exact path = '/' render= { (props) => (<Smurfs smurfs={this.state.smurfs} />)}/>
      </div>
      </div>
    );
  }
}

export default App;
