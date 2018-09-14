import React, { Component } from 'react';
import Axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataSource = 'http://localhost:3333/smurfs';
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    this.getSmurfs();
  };

  setSmurfs = (smurfsArr) => {
    this.setState({smurfs: smurfsArr});
  };

  /* C */
  postSmurf = (event) => {
    event.preventDefault();
    if(event.target.name.value && event.target.age.value && event.target.height.value) {
      Axios
        .post(this.dataSource, {
          name: event.target.name.value,
          age: Number(event.target.age.value),
          height: event.target.height.value
        })
        .then( (response) => this.setSmurfs(response.data) )
        .catch( (err) => console.error(err) );
    }
  };

  /* R */
  getSmurfs = () => {
    Axios
      .get(this.dataSource)
      .then( (response) => this.setSmurfs(response.data) )
      .catch( (err) => console.error(err) );
  };

  /* U */
  // putSmurf = (event) => {};

  /* D */
  // deleteSmurf = (id) => {};

  render() {
    return (
      <div className="App">
        <SmurfForm postSmurf={this.postSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
