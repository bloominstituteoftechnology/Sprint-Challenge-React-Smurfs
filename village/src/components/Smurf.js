import React from "react";
import styled from "c:/Users/Brandon/Documents/Lambda2/Sprint-Challenge-React-Smurfs/node_modules/styled-components/dist/styled-components.cjs";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: #B01DAB;
  border-radius: 10px
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

