import React, { Component } from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';
import { Redirect } from 'react-router-dom';

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {},
            deleted: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchSmurf(id)
    }

    deleteSmurf = () => {
        const id = this.state.smurf.id;
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(resp => this.setState({deleted: true}))
            .catch(err => console.log(err))
    }

    fetchSmurf = (id) => {
        axios
            .get(`http://localhost:3333/smurfs/${id}`)
            .then(resp => {
                this.setState(() => ({smurf: resp.data}))
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    render() { 
        return this.state.deleted ? (
            <Redirect to="/"/>
        ) : (
            <div className="card">
                <SmurfCard smurf={this.state.smurf}/>
                <button className="delete" 
                    onClick={this.deleteSmurf}>Delete from Smurfs
                </button>
            </div>
        )
    }
}

export default Smurf;
