import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

class SmurfForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            age: '',
            height: '',

        };
        this.addSmurf = this.addSmurf.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
    }

    addSmurf(event) {
        event.preventDefault();

        axios
            .post('http://localhost:3333/smurfs', this.state)
            .then(response => {
                console.log('response from post', response);
                // console.log('check prosp to see if has onCreation', response.data);
                this.props.onCreation(response.data);
            })
            .catch(error => {
                console.error('error saving the data');
            });
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateAge(event) {
        this.setState({
            age: event.target.value
        });
    }

    updateHeight(event) {
        this.setState({
            height: event.target.value
        });
    }

    render() {
        return (
            <SmurtForm className="SmurfForm">
                <h1 className="display-4">Add New Smurf </h1>
                <form onSubmit={this.addSmurf}>
                    <div className="form-group">
                        <input
                            onChange={this.updateName}
                            placeholder="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.updateAge}
                            placeholder="age"
                            value={this.state.age}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.updateHeight}
                            placeholder="height"
                            value={this.state.height}
                        />
                     </div>

                    <button className="btn btn-success btn-lg" type="submit">Add +</button>
                </form>
            </SmurtForm>
        );
    }
}

const SmurtForm = styled.div`
    border:1px solid grey;
    text-align: center;
    margin:0px auto;
    margin-top: 15%;
    padding: 20px;
    
    h1 {
        font-size:40px;
    }
    
`;

export default SmurfForm;