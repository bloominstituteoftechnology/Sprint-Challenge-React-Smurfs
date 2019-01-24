import React from "react";
import styled from "styled-components";

const SmurfCard = styled.div`
  border: 1px solid black;
  width: 250px;
  margin: 5px 0;
  border-radius: 14px;
`;

const Name = styled.h3``;

const Height = styled.strong``;

const Age = styled.p``;

const Smurf = props => {
  return (
    <SmurfCard>
      <Name>{props.name}</Name>
      <Height>{props.height} tall</Height>
      <Age>{props.age} smurf years old</Age>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
