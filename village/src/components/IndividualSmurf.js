import React from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class IndividualSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            individualSmurf: '',
            id:'',
            name:'',
            age:'',
            height:''
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id
        axios.get('http://localhost:3333/smurfs').then(res=>{
        for (let i=0; i<res.data.length; i++) {
            if (res.data[i].id===Number(id)){
                return this.setState({individualSmurf:res.data[i],id:id});
            }
        }}
        ).catch(err=>console.log(err));
    }
    deleteSmurf=()=>{
        axios
        .delete(`http://localhost:3333/smurfs/${this.state.id}`)
        .then(res=>{{console.log(res); this.props.history.push('/smurfs')}})
        .catch(err=>console.log(err));
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    updateSmurfInfo=()=>{
        const updatedSmurfInfo={
            name: this.state.name||this.state.individualSmurf.name,
            age: this.state.age||this.state.individualSmurf.age,
            height: this.state.height||this.state.individualSmurf.height
        }
        axios
        .put(`http://localhost:3333/smurfs/${this.state.id}`,updatedSmurfInfo)
        .then(res=>{console.log(res); this.props.history.push('/smurfs')})
        .catch(err=>console.log(err));
    }
    render() {
        return (
            <div>
            <Smurf
                name={this.state.individualSmurf.name?this.state.individualSmurf.name:null}
                id={this.state.individualSmurf.id?this.state.individualSmurf.id:null}
                age={this.state.individualSmurf.age?this.state.individualSmurf.age:null}
                height={this.state.individualSmurf.height?this.state.individualSmurf.height:null}
            />
            <button type='button' onClick={this.deleteSmurf}>Delete Smurf</button>
            <button type='button' onClick={()=>this.props.history.push('/')}>Go Back To Smurfs Village</button>
            <input type='text' name='name' value={this.state.name} placeholder='Enter new name' onChange={this.handleInputChange}/>
            <input type='number' name='age' value={this.state.age} placeholder='Enter new age' onChange={this.handleInputChange}/>
            <input type='text' name='height' value={this.state.height} placeholder='Enter new height' onChange={this.handleInputChange}/>
            <button type='button' onClick={this.updateSmurfInfo}>Update Smurf Info</button>
            </div>
        )
    }
}
export default IndividualSmurf;