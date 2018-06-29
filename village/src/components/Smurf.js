import React from 'react';
import '../App.css'
import { Card, CardTitle, CardText, Button } from 'reactstrap';

class Smurf extends React.Component {
  constructor(props) {
    super(props)
  }
  
  clickDelete = ({id}) => {
    this.props.deleteHandler(id);
  };

  render() {
    return (
      <Card div className="Smurf">
        <CardTitle>{this.props.name}</CardTitle>
        <strong>{this.props.height} tall</strong>
        <CardText>{this.props.age} smurf years old</CardText>
        <Button onClick={() => this.clickDelete(this.props.id)}>delete smurf</Button>
      </Card>
    );
  };
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

