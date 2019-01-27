import React from 'react';
import { Segment, Loader, Card, Image, Button } from 'semantic-ui-react';

class SmurfDetail extends React.Component {
  state = {
    smurf: null,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.smurfs.length > 0 && !state.smurf){ 
      const smurf = props.smurfs.find( smurf => (
        smurf.id.toString() === props.match.params.id
      ));

      if (!smurf) {
        window.alert(`Cannot find a smurf with id ${props.match.params.id}`)
        props.history.push('/');
        return null;
      }

      return({ smurf })
    }
    return null;
  }

  render() {
    return (
      <Segment>
        {
          !this.state.smurf?
          <Loader active inline='centered' />:
          <Card.Group centered>
            <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
              <Card.Content>
                <Card.Header>{this.state.smurf.name}</Card.Header>
                <Card.Description>{this.state.smurf.age} smurf years</Card.Description>
                <Card.Description>{this.state.smurf.height} tall</Card.Description>
              </Card.Content>
              <Card.Content>
                <Button floated='right' onClick={() => this.props.history.push('/')}>Back</Button>
              </Card.Content>
            </Card>
          </Card.Group>
        }
      </Segment>
    );
  }
}
 
export default SmurfDetail;