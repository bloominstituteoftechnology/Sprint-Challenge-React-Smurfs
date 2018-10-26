import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink  } from "react-router-dom";
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
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => this.setState({smurfs: response.data}))
}


addSmurf = (event, newSmurf) => {
  event.preventDefault();
  axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(response => this.setState({smurfs: response.data}))
  .catch(err => console.log('Error!'))

}










  render() {
    return (
      <div className="App">
       <nav>
         <NavLink to='/smurfs'>Smurf Village</NavLink>
         <NavLink to='/smurf-form'>Add A New Smurf</NavLink>
       </nav>
       <Route path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
       <Route path="/smurfs" render={() => <Smurfs smurfs={this.state.smurfs} />} />

      </div>
    );
  }
}

export default App;
