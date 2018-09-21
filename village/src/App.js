import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

import axios from 'axios';

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
              //console.log(response); returns an object with data : Array(1)
            this.setState({smurfs: response.data})
            
          }).catch(err => console.error(`Error has taken place ${err}`));
        }


  render() {
    return (
      <React.Fragment>
        {/* <SmurfForm /> */}
        <Route exact path='/' component={SmurfForm}/>
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
        <Route path='/smurfs' component={Smurf}/>
      </React.Fragment>
    );
  }
}

export default App;
