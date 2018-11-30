import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Div = styled.div`
width: 50px;
margin: 10% 1%;
`
const H3 = styled.h3`
font-weight: bold;
font-size: 1.4rem;
margin: 5%;
color: black;
text-align: center;
`
const P = styled.p`
font-size: 1.0rem;
margin: 5%;
color: black;
text-align: center;
`

const Smurf = props => {
  return (
    <Link to={`/${props.id}`} style={{textDecoration: 'none'}}>
    <Div>
      <H3>{props.name}</H3>
      <P>{props.height} tall</P>
      <P>{props.age} smurf years old</P>
    </Div>
    </Link>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

Smurf.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  age: PropTypes.string,
  id: PropTypes.number
}

