import React from 'react';
import {Route, Link} from "react-router-dom";
import axios from 'axios';

class Smurf extends React.Component {

    constructor(props){
        console.log("Creating smurf ");
        super(props);
        this.state={
            smurf : null,
            deleteHandler: this.props.deleteHandler,
            id : this.props.match.params.id
        }
    }
    deleteSmurf=(event)=>{
        this.props.deleteHandler(this.state.id)
    }



    render () {
           let smurfs = this.props.smurfs;
           let smurf = null;
           for (let i=0; i < smurfs.length; i++ ){
               if (smurfs[i].id == this.state.id) {
                   smurf = smurfs[i];
                   break;
               }
           }

           if (smurf == null) {
               return (
                   <div>Smurf not found</div>
               );
           }
           console.log("Rendering smurf " + this.state.id);
           return (
               <div className="Smurf">
                   <p>ID : {this.state.id}</p>
                   <h3>{smurf.name}</h3>
                   <strong>{smurf.height} tall</strong>
                   <p>{smurf.age} smurf years old</p>
                   <button onClick={this.deleteSmurf}>Delete</button>
                   <Link to={`/smurf-form/${this.state.id}`}> Update </Link>
               </div>);
           }


}

Smurf.defaultProps = {
    name: '',
    height: '',
    age: ''
};

export default Smurf;