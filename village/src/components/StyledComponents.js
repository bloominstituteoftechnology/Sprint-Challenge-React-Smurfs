import styled from 'styled-component';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputStyle = styled.input`
    align-self: center;
    height: 5vh;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 2%;
    margin-bottom: 15px;
`;

export const Submit = styled.button`
    font-size: 16px;
    font-weight: bold;
    background-color: lightblue;
    width: 20%;
    height: 5vh;
    border: 1px solid darkgray;
    border-radius: 5px;
    align-self: center;
    &:hover{
        background-color: lightgreen;
    }
`;