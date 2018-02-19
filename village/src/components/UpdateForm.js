import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class UpdateForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.updateThisSmurf.myId,
            name: this.props.updateThisSmurf.name,
            age: this.props.updateThisSmurf.age,
            height: this.props.updateThisSmurf.height,
            smurfs: this.props.updateThisSmurf,
        };

        this.updateSmurf = this.updateSmurf.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
    }


    componentWillReceiveProps(nextProps) {

        this.setState({ id: nextProps.updateThisSmurf.myId });
        this.setState({ name: nextProps.updateThisSmurf.name });
        this.setState({ age: nextProps.updateThisSmurf.age });
        this.setState({ height: nextProps.updateThisSmurf.height });

    }

    updateSmurf = (event) => {
        event.preventDefault();

        axios
            .put(`http://localhost:3333/smurfs/${this.state.id}`, this.state)
            .then(response => {
                this.props.runLoadSmurf();
            })
            .catch(error => {
                console.error('error saving the data');
            });
    };

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
            <UpdateContainer className="UpdateContainer">
                <h1 className="display-4">Update <br/>
                    <span >{this.props.updateThisSmurf.name} </span>
                </h1>

                <form onSubmit={this.updateSmurf}>
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
                    <div className="form-group">
                        <input
                            name="id"
                            value={this.state.id}
                            type="hidden"
                        />
                    </div>
                    <button className="btn btn-success btn-lg" type="submit"> - Update - </button>
                </form>
            </UpdateContainer>
        );
    }
}

const UpdateContainer = styled.div`
    border:1px solid grey;
    text-align: center;
    margin:0px auto;
    margin-top: 15%;
    padding: 20px;
    
    h1 {
        font-size:40px !important;
    }

`;

export default UpdateForm;