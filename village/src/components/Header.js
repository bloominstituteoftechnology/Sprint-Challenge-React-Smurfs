import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <Container>
        <Row>
          <Col>
          <Link to="/" ><h1>Smurf Village</h1></Link>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
  )

}
 
export default Header;