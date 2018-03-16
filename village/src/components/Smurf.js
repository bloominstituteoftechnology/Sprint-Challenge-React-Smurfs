import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row
} from "reactstrap";
import SmurfForm from "./SmurfForm";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log("Smurf: ", this.props);
    return (
      <Container>
        <Card className="Smurf">
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.height} feet tall</CardText>
            <CardText>{this.props.age} years old</CardText>
            <Row>
              {this.props.button}
              <Button className="ml-1" color="danger" onClick={this.toggle}>
                Edit
              </Button>
            </Row>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Edit Smurf</ModalHeader>
              <ModalBody />
              <ModalFooter>
                <SmurfForm
                  submit={this.props.submit}
                  test="Testing"
                  id={this.props.id}
                />
                {/* <Button
                  color="primary"
                  type="submit"
                  onClick={e => {
                    this.toggle();
                  }}
                >
                  Submit
                </Button>{" "} */}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Smurf;
