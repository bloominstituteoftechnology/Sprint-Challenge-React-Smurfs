import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Smurf from './Smurf';

class SmurfPage extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            age: '', 
            height: ''
        }
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }



    render () {
        console.log(this.props)
        return (
            <div>
                <Link to = '/'>Back to Home Page</Link>
                <br/>
                <br/>
                <br/>
                <Link to = '/smurfvillage'>Back to Smurf Villiage</Link>
                <br/>
                <br/>
                <br/>
                <div className="Smurf">
                    <h3>{this.props.location.state.name}</h3>
                    <strong>{this.props.location.state.height} tall</strong>
                    <p>{this.props.location.state.age} smurf years old</p>
                </div>
                <button onClick ={ () => this.props.delete(this.props.location.state.id)}><Link to ="/smurfvillage">Delete{this.props.location.state.name}</Link></button>
                <br/>
                <br/>
                <br/>
                <div className="SmurfForm">
                    <form onSubmit={this.addSmurf}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder={this.props.location.state.name}
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder={this.props.location.state.age}
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder={this.props.location.state.height}
                        value={this.state.height}
                        name="height"
                    />
                    <button type="submit" onClick={this.add}>Update Smurf</button>
                    </form>
                </div>
            </div>
        );

    }

}
export default SmurfPage