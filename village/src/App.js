import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
	smurfs: [] 
    };
    this.url = 'http://localhost:3333/smurfs';
  }
  componentDidMount() {
    this.getSmurfs(this.url);
  }


getSmurfs = URL => {
	axios
		.get(URL)
		.then(res => this.setState({smurfs : res.data}))
		.catch(err => console.log(err));
};

deleteSmurf = id => {
	axios
		.delete(`${this.url}/${id}`)
		.then(res => this.setState({smurfs : res.data}))
		.catch(err => console.log(err));
};


updateSmurfs = smurfs => {
	this.setState({smurfs})
};

  render() {
    return (
      <div className="App">
	<header>
		<NavLink to="/smurf-form">Form</NavLink>
		<NavLink to="/">Home</NavLink>
	</header>
                <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} updateSmurfs={this.getSmurfs} URL={this.url} />}
        />
	
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
