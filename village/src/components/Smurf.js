import React from 'react';

import styled from 'styled-components';

const SmurfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const SmurfCard = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  width: 30%;
  margin: 16px auto;
  box-shadow: 5px 9px 16px rgba(0, 0, 0, 0.7);
  align-items: center;
  background-color: transparent;
  color: #ffffff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black,
    2px 2px 3px black;
  padding: 1rem;
  flex-flow: column;
  border-radius: 8px;
  font-size: 20px;
  border: 1px inset silver;
`;
const DeleteButton = styled.button`
  cursor: pointer;
  height: 30px;
  background-color: #9f001e;
  border-radius: 5px;
  border-color: black;
  color: #ffffff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black,
    2px 2px 3px black;
  box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.6);
  font-family: 'Boogaloo', cursive;
  font-size: 13px;
`;

const Smurf = props => {
  return (
    <SmurfWrapper>
      <SmurfCard>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <br />
        <DeleteButton
          onClick={e => {
            props.deleteSmurf(e, props.id);
          }}
        >
          DELETE SMURF
        </DeleteButton>
      </SmurfCard>
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
