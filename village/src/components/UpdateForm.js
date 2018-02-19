import React from 'react';
import axios from 'axios';

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

        console.log('----SOLO PASA UNA VEZ CONTRUCTOR', this.props, this.state);
    }


    componentWillReceiveProps(nextProps) {

        this.forceUpdate();

        this.setState({ id: nextProps.updateThisSmurf.myId });
        this.setState({ name: nextProps.updateThisSmurf.name });
        this.setState({ age: nextProps.updateThisSmurf.age });
        this.setState({ height: nextProps.updateThisSmurf.height });

        // this.loadSmurfInForm();

        console.log('------------------------------', nextProps);
        console.log('passing smurf obl ', nextProps.updateThisSmurf);
        console.log('passing smurf obk ', this.state);

    }

    updateSmurf = (event) => {
        event.preventDefault();

        axios
            .put(`http://localhost:3333/smurfs/${this.state.id}`, this.state)
            .then(response => {
                
                console.log(response.data);
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
            <div>
                <h1>Update {this.props.updateThisSmurf.name}</h1>

                <form onSubmit={this.updateSmurf}>
                    <input
                        onChange={this.updateName}
                        placeholder="name"
                        value={this.state.name}
                    />
                    <input
                        onChange={this.updateAge}
                        placeholder="age"
                        value={this.state.age}
                    />
                    <input
                        onChange={this.updateHeight}
                        placeholder="height"
                        value={this.state.height}
                    />
                    <input
                        name="id"
                        value={this.state.id}
                        type="hidden"
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        );
    }

}

export default UpdateForm;