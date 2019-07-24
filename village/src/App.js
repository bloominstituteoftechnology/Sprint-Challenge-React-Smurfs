import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      })
  }

  addSmurf = (smurf) => {
    
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
       
      })
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <div>
      <div>
        <Navigation />
      </div>
      <div className="Main">

      {/* <NavLink exact to="/">
      Smurf List
      </NavLink>
      <NavLink exact to="/smurf-form">
      Smurf Form
      </NavLink> */}

      <Route
        exact path="/"
        render={props => (
          <Smurfs 
          {...props}
          smurfs={this.state.smurfs}
          />
        )} />
        <Route
          path="/smurf-form"
          render={props=>(
            <SmurfForm
            {...props}
            smurfs={this.state.smurfs}
            addSmurf={this.addSmurf}
            />
          )} />

         {/* props => <SmurfForm {...props} items={this.state.items}/>
          <Route exact path="/" component={Smurfs} /> 
         <SmurfForm />
         <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
      </div>
      {/* <div>
        <Route exact path ="/" component={Smurfs} />
        <Route path ="/smurf-form" component={SmurfForm} />
      </div> */}
      </div>
    );
  }
}

export default App;
