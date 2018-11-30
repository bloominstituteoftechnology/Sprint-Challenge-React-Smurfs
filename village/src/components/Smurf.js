import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Smurf = props => {
  return (
    <Card onClick={() => props.history.push(`/smurf/${props.id}`)} className="Smurf">
      <Card.Content>
        <Card.Header textAlign='center'>{props.name}</Card.Header>
        <Card.Description textAlign='center'>{props.height} tall</Card.Description>
        <Card.Description textAlign='center'>{props.age} smurf years old</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={(e) => {
            e.stopPropagation();
            props.removeSmurf(props.id)
          }}>
            remove
          </Button>

          <Button primary onClick={(e) => {
            e.stopPropagation();
            props.history.push(`/smurf-update/${props.id}`)
          }} >
            update
          </Button>
        </div>
      </Card.Content>

    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

