import React, { Component } from 'react';
import axios from 'axios';
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <SmurfForm />
        {/* <Route path="/smurfForm" render={props =>
          <SmurfForm 
            name={this.state.name}
            height={this.state.height}
            handleInputChange={this.handleInputChange}
            addSmurf={this.addSmurf}
          />}
        /> */}
        <Route exact path ="/" render={props => <Smurfs smurfs={this.state.smurfs} />}/>
         
         
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
