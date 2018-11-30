import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Div = styled.div`
width: ${props => props.theme.main ? ' 120px' : '400px'} ;
margin: ${props => props.theme.main ? '0 1% 50%' : '0 1% 10%'};
padding: 1%;
border: 2px solid #1F1A38;
background: #FFF4E2;
border-radius: 5px;
`
const H3 = styled.h3`
font-weight: bold;
font-size: 1.4rem;
margin: 5%;
color: #1F1A38;
text-align: center;
`
const P = styled.p`
font-size: 1.0rem;
margin: 5%;
color: #1F1A38;
text-align: center;
`

const Smurf = props => {
  return (
    <Link to={`/${props.id}`} style={{textDecoration: 'none'}}>
    <Div theme={props.theme}>
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

