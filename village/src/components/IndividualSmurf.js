import React from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class IndividualSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            individualSmurf: '',
            id:''
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
    render() {
        return (
            <Smurf
                name={this.state.individualSmurf.name}
                id={this.state.individualSmurf.id}
                age={this.state.individualSmurf.age}
                height={this.state.individualSmurf.height}
            />
        )
    }
}
export default IndividualSmurf;