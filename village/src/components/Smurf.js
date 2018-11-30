import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledSmurf = styled.div`
  width: 50%;
  background: blue;
  color: white;
  border-radius: 5px;
  margin: 0 auto;

  a {
    color: white;
  }
`;

const Button = styled.button`
  background-color: red;
  padding: 5px;
  border-radius: 5px;
`;

const Smurf = props => {
  return (
    <StyledSmurf>
      <Link style={{textDecoration: 'none'}} to={`/smurf/${props.id}`}>
        <div>
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
      </Link>
      {!props.edit && (
        <div>
          <Button onClick={() => props.deleteSmurf(props.id)}>
            Delete Smurf
          </Button>
        </div>
      )}
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
