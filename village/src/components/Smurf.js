import React from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Tooltip } from 'reactstrap';

const Icon = styled.i`
color: darkcyan;
margin-left: 40p;
cursor: pointer;
&:last-child {
  margin-left: 10px;
}
`
const IconContainer = styled.div`
display: flex;
width: 5%;
justify-content: space-between;
`
const Container = styled.div`
display: flex;
justify-content: space-around;
width: 60%;
margin: 0 auto;
`

class Smurf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      height: "",
      modal: false,
      tooltipOpen: false,
      tooltipOpenTwo: false,
      tooltipOpenThree: false,
    }
  }

  toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }

    toggleToolTip = () => {
      this.setState({
      tooltipOpen: !this.state.tooltipOpen
      });
  }

    toggleToolTipTwo = () => {
        this.setState({
        tooltipOpenTwo: !this.state.tooltipOpenTwo
        });
    }

    toggleToolTipThree = () => {
      this.setState({
      tooltipOpenThree: !this.state.tooltipOpenThree
      });
  }

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    clickHandler = () => {
      const smurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      this.props.updateSmurf(smurf, this.props.id);
      this.setState({
        name: '',
        age: '',
        height: ''
      })
      this.toggle();
    }

  render() {
    return (
    <div className="Smurf">
      <Container>
          <h3>{this.props.name}</h3>
          <IconContainer>
              <Icon onClick={this.toggle} 
              className="fas fa-edit"></Icon>
              <Icon onClick={() => this.props.deleteSmurf(this.props.id)} 
              className="fas fa-trash-alt"></Icon>
          </IconContainer>
      </Container>
      
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Update Smurf Info</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input placeholder="Edit smurf's name here"
                                    onChange={this.changeHandler} 
                                    name="name" 
                                    value={this.state.name}>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Edit smurf's age here" 
                                    onChange={this.changeHandler} 
                                    name="age" 
                                    value={this.state.age}>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Edit smurf's height" 
                                    onChange={this.changeHandler} 
                                    name="height"  
                                    value={this.state.height}>
                                    </Input>
                                </FormGroup>
                            </Form>  
                        </ModalBody>
                        <ModalFooter>
                            <Button id="update" color="success" onClick={this.clickHandler}>Update Info</Button>
                            <Button id="cancel" color="secondary" onClick={this.toggle}>Cancel</Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="update" toggle={this.toggleToolTip}>
                              Update Info!
                            </Tooltip>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpenTwo} target="cancel" toggle={this.toggleToolTipTwo}>
                                Go Back!
                            </Tooltip>
                        </ModalFooter>
                    </Modal>
    </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

