import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: dodgerblue;
    height: 50px;
`;

const NavBar = () => {
    return (
        <StyledNavBar>
            <NavLink
            to="/"
            activeSyle={{
                fontWeight: "bold",
                color: "orange",
            }}
            >
            Smurfs
            </NavLink>
            <NavLink 
            to="/smurf-form"
            activeStyle={{
                fontWeight: "bold",
                color: "black",
            }}
            >
            Add Smurf
            </NavLink>
        </StyledNavBar>
    )
}

export default NavBar;