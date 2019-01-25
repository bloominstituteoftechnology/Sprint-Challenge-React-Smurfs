import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const NavStyle = styled.div`
  a {
    display: block;
    margin-left: 40px;
    padding: 5px 0;
    color: #ffffff;
  }
`;
const NavbarContainer = ({ toggle, isOpen, resetForm }) => {
  return (
    <NavStyle>
      <Navbar
        className="navbar navbar-dark bg-dark"
        color="light"
        light
        expand="md"
      >
        <h5>
          <NavLink to="/" onClick={resetForm}>
            Smurf Village
          </NavLink>
        </h5>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" onClick={resetForm}>
                Smurfs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/form">Smurfs Form</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavStyle>
  );
};

export default NavbarContainer;
