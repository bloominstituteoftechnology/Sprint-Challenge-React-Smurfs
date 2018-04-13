import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Container>
          <Row>
            {this.props.smurfs.map(smurf => {
              return <Smurf name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height} key={smurf.id} getSmurfs={this.props.getSmurfs} sm="12" />;
            })}
          </Row>
        </Container>
      </div>;
  }
}

export default Smurfs;
