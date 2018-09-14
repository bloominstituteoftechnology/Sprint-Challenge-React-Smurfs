import React from 'react';
import smirfs from './smirfs-village.jpg';
import styled from 'styled-components';

const MainPic = styled.img`
	width: 100%;
`;

const HomeTitle = styled.h2`
	text-align: center;
	font-size: 2rem;
`;

const Header = () => {
  return (
  	<div>
  		<HomeTitle>Welcome to the smurf Village</HomeTitle>
  		<MainPic src={smirfs} alt="smirfs"/>
  	</div>
  )
}

export default Header;
