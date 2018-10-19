import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // getting the data from that url, then setting the state to the data from the url
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({smurfs: response.data})
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  //function is used for adding (posting) new smurf to village list. It sets the state to the new data that was in the form. See SmurfForm...
  addNewSmurf = data => {
    this.setState({smurfs:data})
  }



  render() {
    return (
      <div className="App">
      
      {/* Set links to their respective urls */}
        <nav className = 'navBar'>
          <NavLink className = 'navLink'to ='/'>Home</NavLink>
          <NavLink className = 'navLink' to= '/addSmurf'>Add Smurf</NavLink>
        </nav>
      
      {/* defining what to display for each path */}
    <Route 
        exact path='/' 
        render=
            {props =>
                <Smurfs {...props}smurfs={this.state.smurfs} />
            }
     />

      <Route 
        path='/addSmurf' 
        render=
            {props =>
                <SmurfForm {...props}addNewSmurf={this.addNewSmurf} />
            }
     />
      </div>
    );
  }
}

export default App;
