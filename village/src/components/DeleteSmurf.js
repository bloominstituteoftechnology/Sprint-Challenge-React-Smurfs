import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
 
const StyleButton = styled(Button)`
    width: 100px;
`

class DeleteSmurf extends React.Component {
    constructor(props){
        super(props);
    }

    deleteSmurf = () => {
        axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
        .then(res => this.props.updateState(this.state.newSmurfs))
        .then(window.location.reload())
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <Link to='/smurfs'><StyleButton color="danger" onClick={this.deleteSmurf}>Delete</StyleButton></Link>
        )
    }
}

export default DeleteSmurf;