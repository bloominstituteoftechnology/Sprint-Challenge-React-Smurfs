import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import SmurfBar from './components/SmurfBar';

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
  componentDidMount(){
    this.getSmurfs();
  }
  getSmurfs = () => {
      axios
      .get('http://localhost:3333/smurfs')
      // .then(res => {
      //   this.setState({ smurfs: res.data });
      // })
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
  updateSmurf = (id, info) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, info)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        {/* <SmurfForm getSmurfs={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} /> */}
        <Route path="/" component={SmurfBar} />
        <Route 
          exact path="/"
          // render={props => 
          //   <Smurfs {...props} smurfs={this.state.smurfs} getSmurfs={this.getSmurfs}/>
          // }
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} updateSmurf={this.updateSmurf} />}
        />
        <Route 
        path="/smurf-form" 
        render={props => 
          <SmurfForm {...props} getSmurfs={this.getSmurfs} />
          }
        />
      </div>
    );
  }
}

export default App;
