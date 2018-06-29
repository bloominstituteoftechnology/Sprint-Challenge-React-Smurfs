import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StyledForm = styled(Form)`
    border: 1px solid whitesmoke;
    box-shadow: 2px 2px 5px #0a1f42;
    margin: 30px 0;
    padding: 20px;
    width: 30vw;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

class UpdateSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitChange = () => {
        axios.put(`http://localhost:3333/smurfs/${this.props.id}`, {...this.state})
        .then(res => this.props.updateState(this.state.newSmurfs))
        .then(window.location.reload())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <StyledForm>
                    <FormGroup>
                        <Label for="name">New Name: </Label>
                        <Input onChange={this.handleChange} type="text" name="name" id="name" placeholder="...enter new name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">New Age: </Label>
                        <Input onChange={this.handleChange} id="age" type="number" name="age" placeholder="...enter new age"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">New Height: </Label>
                        <Input onChange={this.handleChange} id="height" type="text" name="height" placeholder="...enter new height"></Input>
                    </FormGroup>
                </StyledForm>
                <Button onClick={this.submitChange}>Update Smurf</Button>
            </div>
        )
    }
}

export default UpdateSmurf;