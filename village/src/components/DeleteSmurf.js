import React, { Component } from 'react';
import axios from 'axios';

class DeleteSmurf extends Component {
    state = {
        id: 0
    }

    updateId = (event) => {
        this.setState({
          id: event.target.value
        });
      }

    deleteSmurf = () => {
        axios.delete('http://localhost:3333/smurfs', 
    {params: {id: this.state.id}})
    }

    render () {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.deleteSmurf}>
                <input
                    onChange={this.updateId}
                    placeholder="Id to delete"
                    //value={this.state.id}
                />
                <button type="submit">Delete Smurf</button>
                </form>
            </div>
        
        )
    }
}

export default DeleteSmurf;