import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 75px;
  width: 100%;
  background-color: black;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const FriendCard = styled.div`
  display: flex;
  flex-flow: column;
  margin: 25px;
  width: 500px;
  height: 200px;
  border-radius: 10px;
 
`;

const HeaderContent = styled.h1`
  font-size: 1.5rem;
  margin: 10px;
`;
const ParagraphContent = styled.p`
  font-size: 1rem;
  margin: 10px;
`;
const Remove = styled.p`
  font-size: 1.25rem;
  margin: 10px;
  align-self: flex-end;
  cursor: pointer;
  user-select: none;
`;
const Smurf = props => {
  return (
    <FriendCard>
      <CardHeader>
        <HeaderContent>{props.name}</HeaderContent>
      </CardHeader>
      <HeaderContent>{props.height} tall</HeaderContent>
      <ParagraphContent>{props.age} smurf years old</ParagraphContent>
    </FriendCard>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
