import React from 'react' ;
import axios from 'axios' ;


const killSmurf = (id) => {
    alert("ID: " + id);
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
            .then(response => {
                console.log("MY-DELETE-RESPONSE: ",response) ;
                window.location.reload() ;
                }
            )
            .catch(error => {
                alert('server .delete error! (see console)') ;
                console.log(error) ;
                }
            )
}
const Delete = props => {
    return(
        <button onClick={() => killSmurf(props.id)}>Kill Smurf</button>
    )
}
export default Delete ;