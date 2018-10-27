import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

const Navigation = () => {
	return (
		<div>
			<div className="AppNav">
				<div className="linkbox">
					<NavLink to="/"  className="link" activeClassName="selected">Smurf List</NavLink>
				</div>
				<div className="linkbox">
					<NavLink to="/smurf-form" className="link" activeClassName="selected">Smurf Form</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
