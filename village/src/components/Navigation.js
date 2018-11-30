import React from 'react';
import styled from 'styled-components';
import {NavLink } from 'react-router-dom';

const Header = styled.header`
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
background: #DD99BB;
border-bottom: 1px solid #FFF4E2;
padding: 5%;
width: 100%;
`

const H1 = styled.h1`
color: #FFF4E2;
font-size: 2.4rem;
text-decoration: none;
`
const Navigation = (props) => {
    return (
        <Header>
            <NavLink exact to={'/'} style={{textDecoration: 'none'}}>
                <H1>View All Smurfs</H1>
            </NavLink>
            <NavLink  to={`/add`} style={{textDecoration: 'none'}}>
                 <H1>Add A Smurf</H1>
            </NavLink>
        </Header>
    )

}

export default Navigation
