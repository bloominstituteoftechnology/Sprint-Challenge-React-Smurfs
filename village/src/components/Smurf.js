import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import axios from "axios";

class Smurf extends Component {
  constructor() {
    super();
    this.state = {
      isDeleted: false
    };
  }
  handleDelete = () => {
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`);
    this.setState({
      isDeleted: true
    });
  };
  render() {
    return this.state.isDeleted ? null : (
      <div className="Smurf">
        <Card>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>
            <strong>{this.props.height} tall</strong>
            <p>{this.props.age} smurf years old</p>
          </CardText>
          <Button>Edit</Button>
          <Button onClick={this.handleDelete}>Delete</Button>
        </Card>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
