import React,{Component} from 'react';
import axios from 'axios';

class Delete extends Component {
    constructor(props){
      super(props)
      console.log('p', props.getSmurfs)
      this.state={

      }
    }

deleteSmurf =(id)=>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then( dele =>{
             console.log(dele);
        this.componentDidMount()

         })
}
componentDidMount(){
 this.props.getSmurfs();
}

render (){
    return(
  <div>
   <button onClick={()=>this.deleteSmurf(this.props.id)}> Delete</button>        
  </div>   
)
}
}
export default Delete;