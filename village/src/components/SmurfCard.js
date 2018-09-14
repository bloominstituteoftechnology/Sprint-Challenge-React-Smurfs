import React from 'react';
import styled from 'styled-components';

const SmurfCard = (props) => {
  function deleteSmurf() {
    props.deleteSmurf(props.id);
  }

  return (
    <Card className="Smurf">
      <XButton onClick={deleteSmurf}>X</XButton>
      <Name onClick={() => props.history.push(`/smurfs/${props.id}`)}>
        {props.name}
      </Name>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </Card>
  );
};

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default SmurfCard;

const XButton = styled.button`
  border: none;
  position: absolute;
  left: 40px;
  top: 20px;
  font-size: 1rem;
  padding: 0px 2px;
  cursor: pointer;

  &:hover {
    background: #db1111;
    color: white;
  }
`;

const Card = styled.div`
  position: relative;
  text-align: center;
  margin: 30px 1%;
  width: 22%;
`;

const Name = styled.h3`
  cursor: pointer;
`;
