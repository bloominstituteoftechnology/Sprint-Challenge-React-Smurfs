import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: deepskyblue;
border-radius: 2px;
width: 90%;
`

const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

