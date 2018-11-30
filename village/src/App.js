import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

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
			.get("http://localhost:3333/smurfs")
			.then(smurfs => {
				console.log(smurfs);
				this.setState({ smurfs: smurfs.data });
			})
			.catch(smurfed => {
				console.log(smurfed);
			});
	}

	addSmurf = smurf => {
		if (smurf.name !== "")
			axios
				.post("http://localhost:3333/smurfs", smurf)
				.then(smurfs => {
					console.log(smurfs);
					this.setState({ smurfs: smurfs.data });
				})
				.catch(smurfed => {
					console.log(smurfed);
				});
  };
  
  deleteSmurf = id => {
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then(smurfs => {
        console.log(smurfs);
        this.setState({ smurfs: smurfs.data });
      })
      .catch(smurfed => {
        console.log(smurfed);
      });
	};

	editSmurf = (data, id) => {
		axios
			.put(`http://localhost:3333/smurfs/${id}`, data)
			.then(smurfs => {
        console.log(smurfs);
        this.setState({ smurfs: smurfs.data });
      })
      .catch(smurfed => {
        console.log(smurfed);
      });
	};

	render() {
		return (
			<div className='App'>
				<NavLink to='/smurf-form'> Add Smurf </NavLink>
				<NavLink to='/'> Smurf Home </NavLink>
				<Route
					exact
					path='/smurf-form'
					render={props => (
						<SmurfForm {...props} onSubmit={this.addSmurf} />
					)}
				/>

				<Route
					exact
					path='/'
					render={props => (
						<Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>
					)}
				/>
			</div>
		);
	}
}

export default App;
