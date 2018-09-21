import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<h1>La La LaLa La</h1>
			<ul>
				<li>
					<NavLink exact to="/">
						Smurfs
					</NavLink>
				</li>
				<li>
					<NavLink to="/smurf-form">Add Smurf</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
