import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const SmurfStyled = styled.div`
  border: 1px solid whitesmoke;
  color: black;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    .fas {
      margin-left: 20px;
    }
  }
`;

const Smurf = props => {
  return (
    <SmurfStyled>
      <Card body>
        <CardTitle>{props.name}</CardTitle>
        <CardText>
          <strong>{props.height} tall</strong>
          <br />
          <span>{props.age} smurf years old</span>
        </CardText>
        <Button>
          Go here <i className="fas fa-angle-double-right" />
        </Button>
      </Card>
    </SmurfStyled>
  );
};

Smurf.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      // age: PropTypes.string,
      height: PropTypes.string,
      id: PropTypes.String,
      name: PropTypes.string
    })
  ),
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  // age: PropTypes.string,
  height: PropTypes.string
};
export default Smurf;
