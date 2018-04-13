import React,{Component} from 'react';
import axios from 'axios';


class UpdateSmurf extends Component {
    constructor(props){
   super (props)
    this.state={
        ModifySmurf : false,
        name:'',
        age:'',
        height:'',
}
}



modify =() => {
   
   this.setState({ ModifySmurf: !this.state.ModifySmurf})
}
changeSmurf =(id)=>{
let smurf={};
    if (this.state.name  !== ''){
         smurf.name = this.state.name;
}
    if (this.state.age !== '') {
         smurf.age = this.state.age;
    }
    if (this.state.height !== '') {
        smurf.height = this.state.height;
    }
    axios.put(`http://localhost:3333/smurfs/${id}`,smurf)
         .then(chan=>{
             console.log(chan);
          this.componentDidMount();
         })
         .catch(err=>{
             console.log(err)
         })
     this.setState({ name:'', age:'', height:''})
}

componentDidMount(){
    this.props.getSmurfs();
}
 addUpDatedHandler =(event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
render (){
return (
  <div>
 <button onClick ={this.modify}> Update</button>
        { this.state.ModifySmurf ? <div> 
                                <input type="text"
                                    placeholder="update Name "
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.addUpDatedHandler}
                                />
                                <input type="text"
                                    placeholder="update  age "
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.addUpDatedHandler}
                                />
                                <input 
                                    type="text"
                                    placeholder="update  height"
                                    name="height"
                                    value={this.state.height}
                                    onChange={this.addUpDatedHandler}
                                />
                                   <button onClick={() => this.changeSmurf(this.props.id)}> Save </button>
                                  </div> : null }     
  </div>
)
}
}
export default UpdateSmurf;