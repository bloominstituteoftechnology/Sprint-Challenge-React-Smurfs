import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    smurfs: []
	};
    }
    // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    // Notice what your map function is looping over and returning inside of Smurfs.
    // You'll need to make sure you have the right properties on state and pass them down to props.

    componentDidMount() {
	axios
	    .get('http://localhost:3333/smurfs/')
	    .then(response => {
		const smurfs = response.data;
		this.setState({smurfs});
	    })
	    .catch(err => console.log(err));
    }
    
    render() {
	return (
	    <div className="App">
              <nav className="navbar">
                <NavLink to="/smurf-form">Form</NavLink>
                <NavLink to="/">Village</NavLink>
	      </nav>
              <Route path="/smurf-form" component={SmurfForm} />
	      <Route
		exact
		path="/"
		render={
		    () => <Smurfs smurfs={this.state.smurfs} />
		}
		/>
	    </div>
	);
    }
}

export default App;

// <Smurfs smurfs={this.state.smurfs} />
// <Smurfs smurfs={this.state.smurfs.map(smurf => <p key={smurf.name}>{smurf.name}</p>)} />
