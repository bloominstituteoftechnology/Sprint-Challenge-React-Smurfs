import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<h1>La La LaLa La</h1>
			<div>
				<Link to={}">Home</Link>
			</div>
			<div>
				<Link to=smurf-form>Smurf Form</Link>
			</div>
		</div>
	);
};

export default Header;
