import React from 'react'
import axios from 'axios'

function DeleteSmurf(props) {
    
    const removeSmurf = () => {
        const del = props.id
        axios.delete(`http://localhost:3333/smurfs/${del}`)
            .then((response)=> {
                console.log("deleted")
                props.updateSmurfs(response.data)
            })
            .catch(error => {
                console.log("error deleting", error)
            })
    }    
    return (
        <span className="delete-button" onClick={removeSmurf}> <img src="../x-button.png" alt="Delete"/> </span>
    )
}

export default DeleteSmurf