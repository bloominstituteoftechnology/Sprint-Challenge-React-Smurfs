import React from 'react'
import {Link, NavLink} from "react-router-dom"
import styled from 'styled-components'

const Nav = () =>
    <WRAPPER>
        <Link to='/'>TheVillage</Link>
        <nav>
            <NavLink exact to='/'>View Smurfs</NavLink>
            <NavLink to='/add'>Add Smurf</NavLink>
        </nav>
    </WRAPPER>

export default Nav

const WRAPPER = styled.div`
    display: flex;
    background-color: #222;
    font-size: 3rem;
    padding: 1rem 0;
    width: 100vw;
    a {
        color: #0CCCFF;
        text-decoration: none;
    }
    nav {
        display: flex;
        justify-content: center;
        width: 100%;
            min-width: fit-content;
        a {
            color: #ccc;
            margin: 0 1rem;
            text-decoration: none;
            &.active, &:hover {
                color: #0CCCFF;
            }
        }
    }
`