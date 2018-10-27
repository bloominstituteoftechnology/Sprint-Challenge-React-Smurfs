import React from 'react';
import styled from 'styled-components';

const SmurfBox = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 2% auto;
`

const Smurf = props => {
  return (
    <SmurfBox>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick = {() => props.deleteSmurf(props.id)}>Delete</button>
    </SmurfBox>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;