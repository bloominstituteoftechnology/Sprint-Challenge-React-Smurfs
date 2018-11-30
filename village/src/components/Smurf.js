import React from 'react';
import styled from 'styled-components';
import smurfizer from './SmurfStyles';

const SmurfDiv = styled.div`
  color: ${smurfizer.smurfSky};
  border: 1px solid ${smurfizer.smurfLight};
`;

const SmurfH3 = styled.h3`
  color: ${smurfizer.smurf};
`;

const SmurfStrong = styled.strong`
  color: ${smurfizer.smurfLight};
`;

const SmurfP = styled.p`
  color: ${smurfizer.smurfDark};
`;

const SmurfButton = styled.button`
  background-color: ${smurfizer.smurfSky};
  color: ${smurfizer.smurf};
`;

const Smurf = props => {
  return (
    <SmurfDiv>
      <SmurfH3>{props.name}</SmurfH3>
      <SmurfStrong>smurfing {props.height} tall</SmurfStrong>
      <SmurfP>{props.age} smurf years old</SmurfP>
      <SmurfButton onClick={()=>{props.deleteSmurf(props.id)}}>Put This Smurf Out of Its Missery</SmurfButton>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

