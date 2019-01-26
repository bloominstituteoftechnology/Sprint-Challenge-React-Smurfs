import styled from 'styled-components';

export const SmurfsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 50%;
    font-size: 1.5rem;
  }

  a {
    font-size: 1.8rem;
    color: white;
    background-color: dodgerblue;
    width: 20%;
    border: 1px solid dodgerblue;
    padding: 10px;
  }
`

export const SmurfWrapper = styled.div`
  border: 2px solid dodgerblue;
  margin: 20px 0;
  padding: 10px;

  i, a {
    font-size: 2rem;
    color: dodgerblue;
    cursor: pointer;
    margin-right: 30px;
    background-color: white
    border: none;
  }
`

export const FormWrapper = styled.div`
  padding: 10px;
  margin-top: 40px;
  width: 80%;
  margin: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    margin: 10px 0;
    width: 60%;
    border: 1px solid dodgerblue;
    font-size: 1.5rem;
    padding: 5px;
  }

  button {
    font-size: 1.8rem;
    color: white;
    background-color: dodgerblue;
    width: 20%;
    border: 1px solid dodgerblue;
    padding: 10px;
  }
`