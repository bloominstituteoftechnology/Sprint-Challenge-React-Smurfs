import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 4px;
  width: 100%;
  height: 100%;
  background: #4285f4;
`;

const Smurf = props => {
  return (
    <Wrapper>
      <div>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </Wrapper>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
