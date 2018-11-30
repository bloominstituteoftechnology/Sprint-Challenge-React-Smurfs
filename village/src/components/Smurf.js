import React from 'react';
import styled from 'styled-components';

const StyledSmurf = styled.div`
  width: 50%;
  background: blue;
  color: white;
  border-radius: 5px;
  margin: 0 auto;
`;

const Smurf = props => {
  return (
    <StyledSmurf>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
