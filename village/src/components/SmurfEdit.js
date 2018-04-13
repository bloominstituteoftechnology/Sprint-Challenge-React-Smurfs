import React, { Component } from 'react';
import axios from 'axios';


class SmurfEdit extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            age:'',
            height:'',
        };
    };
    handleTextInput = element => {
        this.setState({ [element.target.name]: element.target.value });
      };
    deleteSmurf = smurfId =>{
        axios
        .delete(`http://localhost:3333/smurfs${smurfId}`)
        .then(response =>{
            this.props.updateGet();
        })
        .catch(err =>{
            console.log(err);
        });
    };

render(){
    const {smurf} = this.props;
    console.log(smurf.id)
        return(
            <div key={smurf.id}>
                <button onClick={() => this.deleteSmurf(smurf.id)}>Delete this mang</button>

            </div>
        )



   } 

};
export default SmurfEdit