import React,{ Component} from 'react';
import axios from "axios";


import Smurf from './Smurf';

class SmurfProfile extends Component {
    constructor(props){
      super (props)
      this.state = {
        smurfs : this.props.smurfs,
      }}
      
    render() {
        let friends = this.props.smurfs.filter(item => {
            return item.id === parseInt(this.props.match.params.id)
          })[0];
        
        return (
           
     <div className='smurfcard'> 
       <Smurf {...friends} />
     </div>
    )
        
}}
export default SmurfProfile
