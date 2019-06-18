import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SmurfContainer = styled.div`
  border: 1px solid black;
  min-width: 130px;
  padding: 15px;
  margin: 5px;
  flex: 1;
  position: relative;
`

export const SmurfImg = styled.img`
  width: 100%;
`

export const SmurfText = styled.p`
  font-size: 1.6rem;
`

export const SmurfName = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
`

export const RemoveSmurf = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`
