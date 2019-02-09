import React, { Component } from 'react';
import { Button, FormGroup, Form, Input, Tooltip, Row, Col, Container } from 'reactstrap';

export default class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      tooltipOpen:false
    };
  }
  
  toggleToolTip = () => this.setState({tooltipOpen: !this.state.tooltipOpen})

  addSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.smurfsPost(smurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return  <Container>
                <Row>
                    <Col xs={{ size: 8, offset: 2 }}>
                    <Form onSubmit={this.addSmurf}>
                        <FormGroup>
                            <Input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name"></Input>
                            <Input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" ></Input>
                            <Input onChange={this.handleInputChange} placeholder="height" value={this.state.height} name="height"></Input>
                            <Button block id="add" color="info" type="submit" onClick={this.addSmurf}>Add to the village</Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="add" toggle={this.toggleToolTip}>
                                Add a Smurf!
                            </Tooltip>
                        </FormGroup>
                    </Form>
                    </Col>
                        <img src={require("../assets/form-image.jpg")} alt='Smurf'/>
                    <Col xs="6">
                    </Col>
                </Row>
            </Container>      
  }
}