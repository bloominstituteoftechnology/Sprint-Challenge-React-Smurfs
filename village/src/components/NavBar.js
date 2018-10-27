import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: dodgerblue;
    height: 50px;
    margin-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
`;

const NavBar = () => {
    return (
        <StyledNavBar>
            <StyledNavLink
            exact to="/"
            activeClassName="selected"
            activeStyle={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontStyle: 'italic',
            }}
            >
            Smurfs
            </StyledNavLink>
            <StyledNavLink 
            to="/smurf-form"
            activeStyle={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontStyle: 'italic'
            }}
            >
            Add Smurf
            </StyledNavLink>
        </StyledNavBar>
    )
}

export default NavBar;