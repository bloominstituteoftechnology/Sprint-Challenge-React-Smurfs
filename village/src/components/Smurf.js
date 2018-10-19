import React from 'react'
import {
  SmurfContainer,
  SmurfImg,
  SmurfText,
  SmurfName,
  RemoveSmurf
} from '../styles/Smurf'

const Smurf = ({ id, name, occupation, img, removeSmurf }) => (
  <SmurfContainer>
    <SmurfName>{name}</SmurfName>
    {occupation
      .split(',')
      .map((item, i) => <SmurfText key={i}>occupation: {item}</SmurfText>)}
    <SmurfImg alt={name} src={img} />
    <RemoveSmurf onClick={() => removeSmurf(id)}>x</RemoveSmurf>
  </SmurfContainer>
)

Smurf.defaultProps = {
  name: '',
  occupation: '',
  img: ''
}

export default Smurf
