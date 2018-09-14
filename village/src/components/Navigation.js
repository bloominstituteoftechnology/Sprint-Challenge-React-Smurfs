import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	border: solid black 1px;
	padding: 5px 0;
	margin: 0 30%;
	margin-bottom: 10px;
	background-color: #d6d6ff;
`;

const NavButton = styled.button`
	border-radius: 4px;
	font-size: 2rem;
	border: solid black .5px;
	&:hover {
		color: white;
		background-color: black;
		cursor: pointer;
	}
`;


const Navigation = (props) => {
	return (
		<NavDiv>
			<Link to="/"><NavButton>Home</NavButton></Link>
			<Link to="/smurfs"><NavButton>Smurfs</NavButton></Link>
		</NavDiv>
	)
}

export default Navigation;
