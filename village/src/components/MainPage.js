import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import SmurfsList from './SmurfsList';

const Main = styled.main`
background: #E5BE9E;
border: 1px solid #EAD7D1;
border-radius: 10px;
margin: 5%;
width: 90%;
height: auto;
padding: 1%;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
font-size: 3rem;
font-weight: bold;
text-align: center;
width: 100%;
margin-bottom: 5%;
color: #1F1A38;
`

const MainPage = (props) => {
    return (
        <Main>
        <H1>Smurf Village</H1>
        <SmurfsList 
        smurfs={props.smurfs}
        name={props.name}
        height={props.height}
        age={props.age}
        id={props.id}
        />
        </Main>
    )

}
export default MainPage

MainPage.propTypes = {
    smurfs: Proptypes.array
}