import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import smurfizer from "./components/SmurfStyles";

const SmurfNavLink = styled(NavLink)`
  font-size: 3rem;
  color: ${smurfizer.smurfDark};
  display: block;
  margin: 20px;
  background-color: ${smurfizer.smurfLight};
  border-radius: 10px;
  padding:10px;

  :hover{
    background: ${smurfizer.smurfCornflower};
  }
`;

const SmurfRoute = styled(Route)`

`;


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

	render() {
		return (
			<div className='App'>
				<SmurfNavLink to='/smurf-form'> Add Smurf </SmurfNavLink>
				<SmurfNavLink to='/'> Smurf Home </SmurfNavLink>
				<SmurfRoute
					exact
					path='/smurf-form'
					render={props => (
						<SmurfForm {...props} onSubmit={this.addSmurf} />
					)}
				/>

				<SmurfRoute
					exact
					path='/'
					render={props => (
						<Smurfs
							{...props}
							smurfs={this.state.smurfs}
							deleteSmurf={this.deleteSmurf}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
