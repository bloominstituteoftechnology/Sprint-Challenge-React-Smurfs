import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const url = 'http://localhost:3333/smurfs';

class SmurfView extends Component {
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
        
        let id = Number(this.props.match.params.id);
        axios.get(url)
            .then(res => {
                let matching = res.data.find(smurf => smurf.id === id);
                this.setState({
                    name: matching.name,
                    age: matching.age,
                    height: matching.height,
                    id: matching.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }



    render(){
        return (
            <div className="smurf-view">
                <h3>{this.state.name}</h3>
                <strong>{this.state.height} tall</strong>
                <p>{this.state.age} smurf years old</p>
                <Link to={`/smurfs/${this.state.id}`}><button> Update </button></Link>
                <Link to='/smurfs'><button> Back </button></Link>
                <Link to="/">Home</Link>
            </div>
        );
    }
};


export default SmurfView;
