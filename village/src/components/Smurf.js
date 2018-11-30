import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSmurf = styled.div`
  width: 50%;
  background: blue;
  color: white;
  border-radius: 5px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: red;
  padding: 5px;
`;

const Smurf = props => {
  return (
    <StyledSmurf>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</Button>
      <Link to={`/smurf/${props.id}`}><Button>Edit Smurf</Button></Link>
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
