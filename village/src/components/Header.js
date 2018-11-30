import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: blue;
`;

const LinkVillage = styled(Link)`
  padding: 20px 50px;
  color: white;
  text-decoration: none;
  font-size: 48px;
  border-left: 2px solid black;
  &:hover {
    color: purple;
  }
`;

const LinkSmurfForm = styled(Link)`
  padding: 20px 50px;
  color: white;
  text-decoration: none;
  font-size: 48px;
  border-left: 2px solid black;
  &:hover {
    color: purple;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Header = props => {
  return (
    <DivWrapper>
      <LinkVillage to={props.urlLinks.home}>Village</LinkVillage>
      <LinkSmurfForm to={props.urlLinks.smurfForm}>Smurf Form</LinkSmurfForm>
    </DivWrapper>
  );
};

// Header.propTypes = {
//   propertyName: PropTypes.string
// }

export default Header;
