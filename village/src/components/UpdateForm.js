import React from 'react';
import { Button, FormGroup, Form, Input, Tooltip, Row, Col, Container } from 'reactstrap';

export default class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            tooltipOpen:false
        };
    }

    updatingSmurf = e => {
        e.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.updateSmurf(smurf, this.props.id)
    }

    toggleToolTip = () => this.setState({tooltipOpen: !this.state.tooltipOpen})

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    render() {
        return (
            <div className="SmurfForm">
            <Form onSubmit={this.updatingSmurf}>
                <FormGroup>
                    <Input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name"></Input>
                    <Input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" ></Input>
                    <Input onChange={this.handleInputChange} placeholder="height" value={this.state.height} name="height"></Input>
                    <Button id="update" color="success" type="submit" onClick={this.addSmurf}>Update Smurf's Info</Button>
                    <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="update" toggle={this.toggleToolTip}>
                        Update a Smurf!
                    </Tooltip>
                </FormGroup>
            </Form>
            </div>
        );
    }
}