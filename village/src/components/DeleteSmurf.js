import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Close = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    cursor:pointer;
    color: red;
    font-size: 31px;
    font-weight: bold;
    display: inline-block;
    line-height: 0px;
    padding: 11px 3px;
    font-size: 15px;       
`
class DeleteSmurf extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            newSmurfs: []
        }
    }

    deleteSmurf = () => {
        axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
        .then(res => this.setState({ newSmurfs: res.data}))
        .catch(error => console.log(error));

        this.props.updateState(this.state.newSmurfs);
    }
    
    render() {
        return (
            <Close onClick={this.deleteSmurf}>X</Close>
        )
    }
}

export default DeleteSmurf;