import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import NavBar from './components/navBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
componentDidMount(){
axios.get('http://localhost:3333/smurfs')
	.then(res=>{this.setState({smurfs:res.data})})
	.catch(err=>{console.log(err)});
}
  render() {
    return (
      <div className="App">
	  <NavBar />
        <Route path="/smurf-form/" component={SmurfForm} />
		<Route exact path="/" render={()=><Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
