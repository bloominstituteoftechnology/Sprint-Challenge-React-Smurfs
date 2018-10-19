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

const SmurfActions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  i {
    cursor: pointer;
  };
  .fa-trash {
    color: rgba(255, 0, 0, 0.5);
  };
  .fa-edit {
    color: rgba(0, 0, 255, 0.5);
  } ;
} 
`;

const Smurf = props => {
  return (
    <Container>

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
        <SmurfActions>
            <i className="fas fa-edit" />
            <i className="fas fa-trash" onClick={() => props.deleteSmurf(props.id)}/>
        </SmurfActions>
      </StyledSmurf>
    </Container>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

