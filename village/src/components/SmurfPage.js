import React, { Component } from 'react';
import '../App.css';

class SmurfPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '5',
            height: '5.1',
            id: ''
        }
    }

    componentDidMount() {
        const smurf = this.props.smurfs.find(smurf => smurf.id == this.props.match.params.id);
        console.log(this.props.smurfs);
        this.setState({
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
            id: smurf.id
        })
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render(){
        console.log('test 2', this.props.smurfs);
        return (
            <div className="SmurfForm">
                <form onSubmit={(event) =>{
                    event.preventDefault();
                    this.props.editSmurf(this.state, this.state.id);
                    this.clearForm();
                    this.props.history.push("/"); 
                    }}>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Edit smurf name" name="name" value={this.state.name}/>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Edit smurf age" name="age" value={this.state.age}/>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Edit smurf height" name="height" value={this.state.height}/>
                    <button className="btn-primary" type="submit">Update</button>
                </form>
            </div>
        );
    }
}

export default SmurfPage;