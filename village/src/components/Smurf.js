import React from 'react';

import styled from 'styled-components';

const SmurfContainer = styled.div`
  flex: 0 1 20%;
  min-width: 200px;
  height: 150px;
  background-color: #f6f5f7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23070607' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  margin: 10px;
  padding: 5px;
`;

const Smurf = (props) => {
  // const smurf = props.smurfs.find(smurf => Number(smurf.id) === Number(props.match.params.id));
  // const newSmurf = {...smurf};
  // const id = props.match.params.id;

  return (
    <SmurfContainer>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button onClick={() => {props.delete(id)}}>👋🏼 Smurf</button> */}
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

