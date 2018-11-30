import React, { Component } from 'react';
import { Segment, Header, Card, Loader } from 'semantic-ui-react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const { smurfs, removeSmurf, ...props } = this.props;
    return (
      <Segment className="Smurfs">
        <Header style={{ marginBottom: '50px' }} textAlign='center' as='h1'>Smurf Village</Header>
        {
          smurfs.length === 0 ?
          <Loader active inline='centered' />:
          <Card.Group centered>
            {smurfs.map(smurf => {
              return (
                <Smurf
                  {...props}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  removeSmurf={removeSmurf}
                  key={smurf.id}
                />
              );
            })}
          </Card.Group>
        }
      </Segment>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
