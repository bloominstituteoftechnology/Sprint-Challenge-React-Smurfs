import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfCard from './components/SmurfCard';

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
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);

      });
  }
  addNewSmurf = smurf => {


    axios.post('http://localhost:3333/smurfs', smurf)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.log(error);
      });

    console.log(this.state)
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} addNewSmurf={this.addNewSmurf}  />} />
        <Route path="/smurfs/:id" render={(props) => <SmurfCard {...props} update={this.update} smurfs={this.state.smurfs} />} />
        {/* <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
