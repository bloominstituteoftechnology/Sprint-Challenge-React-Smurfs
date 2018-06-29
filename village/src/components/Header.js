import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 300px;
  height: 50px;
  text-decoration: none;
  background: skyblue;
  color: white;
  text-align: center;
  border: 1px solid #000080;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <h2>Hello Friend! Welcome to the Smurf Village</h2>
      <h3>Stay as long as you like, but watch where you step!</h3>
      <Button>
        <Link to="/smurfs">Enter Village</Link>
      </Button>
    </Container>
  );
};

export default Header;
