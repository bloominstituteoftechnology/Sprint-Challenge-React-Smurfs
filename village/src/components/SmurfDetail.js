import React from 'react';
import Axios from 'axios';


class SmurfDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id:'',
            name:'',
            age:'',
            height:''
        }
    }
    
    componentDidMount(){
        console.log('wtf??')
        Axios.get(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
             .then(res =>{
                 console.log('results...',res)
                 this.setState({
                                    id:res.data[0].id,
                                    name:res.data[0].name,
                                    age:res.data[0].age,
                                    height:res.data[0].height
                                })
            })
             .catch(error => console.log(error))

    }

    render(){
        
        return(
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.height}</p>
            </div>
        )
    
    }
}

export default SmurfDetail;
