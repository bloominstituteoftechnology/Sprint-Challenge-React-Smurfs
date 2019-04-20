import React from 'react';
import styled from 'styled-components';

const SmurfCard = styled.div`
  max-width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 5px solid #222;
  border-radius: 10px;
`

const DeleteButton = styled.button`
  background-color: #F52C07;
  color: #fff;
  padding: 3px 5px;
  border: 0;
  border-radius: 5px;
`

const Smurf = props => {
  return (
    <React.Fragment>
      <SmurfCard>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </SmurfCard>
      <DeleteButton onClick={props.deleteSmurf}>Remove this Smurf</DeleteButton>
    </React.Fragment>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

