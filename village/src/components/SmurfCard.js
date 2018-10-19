import React from 'react';
import styled from 'styled-components'

import { Container } from '../Style';

const StyledSmurf = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const SmurfInfo = styled.div`
  text-align: left;
`;

const SmurfCard = props => {

  return (
    <Container onClick={() => props.goToSmurf(props.id)}>
      <StyledSmurf>
        <SmurfInfo>
          <div>
              <span>{props.name}</span>
          </div>
          <div>
              <span>{props.age} smurf years old</span>
          </div>
          <div>
              <span>{props.height} tall</span>
          </div>
        </SmurfInfo>
      </StyledSmurf>
    </Container>
  );
};

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfCard;

