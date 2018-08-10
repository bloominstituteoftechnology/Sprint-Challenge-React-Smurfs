import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            id: 0
        }
    }

    componentDidMount() {
        let url = 'http://localhost:3333/smurfs';
        let id = Number(this.props.match.params.id);
        axios.get(url)
            .then(res => {
                let found = res.data.find(smurf => smurf.id === id);
                this.setState({
                    name: found.name,
                    age: found.age,
                    height: found.height,
                    id: found.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }



    render(){
        return (
            <div className="Smurf">
                <h3>{this.state.name}</h3>
                <strong>{this.state.height} tall</strong>
                <p>{this.state.age} smurf years old</p>
                <Link to={`/smurfs/${this.state.id}`}><button> Update </button></Link>
                <Link to='/smurfs'><button> Back </button></Link>
            </div>
        );
    }
};


export default SingleSmurf;

