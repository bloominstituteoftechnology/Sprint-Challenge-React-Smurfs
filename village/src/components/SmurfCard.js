import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid whitesmoke;
  box-shadow: 2px 2px 5px #0a1f42;
  margin: 30px 0;
  width: 30vw;
`

const SmurfCard = props => {
    return (
        <Card>
            <h3>{props.name}</h3>
            <strong>{props.height} tall</strong>
            <p>{props.age} smurf years old</p>
      </Card>
    )
}

export default SmurfCard;