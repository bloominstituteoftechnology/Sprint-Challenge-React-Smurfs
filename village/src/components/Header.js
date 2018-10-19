import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import { Container } from '../Style';

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 80px;
    i {
        font-size: 28px;
    }
`;

const Header = () => {
    return (
        <Container>
            <Navigation>
                <NavLink exact to="/"><i className="fas fa-home"></i></NavLink>
                <NavLink to="/smurf-form"><i className="fas fa-plus-square"></i></NavLink>
            </Navigation>
        </Container>
    );
}

export default Header;
