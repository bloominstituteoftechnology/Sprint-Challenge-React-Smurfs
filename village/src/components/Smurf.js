import React from 'react'
import { SmurfContainer, SmurfImg, SmurfText, SmurfName } from '../styles/Smurf'

const Smurf = ({ name, occupation, img }) => (
  <SmurfContainer>
    <SmurfImg alt={name} src={img} />
    <SmurfName>{name}</SmurfName>
    {occupation
      .split(',')
      .map((item, i) => <SmurfText key={i}>{item}</SmurfText>)}
  </SmurfContainer>
)

Smurf.defaultProps = {
  name: '',
  occupation: '',
  img: ''
}

export default Smurf
