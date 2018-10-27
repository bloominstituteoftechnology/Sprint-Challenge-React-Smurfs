import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  state={
    name:'',
    heignt:'',
    age:''
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
          .then( response=>{
                  console.log(response)
                  this.setState({name:response.data.name})
                  this.setState({height:response.data.height})
                  this.setState({age:response.data.age})        
          })
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={this.name}
                id={this.id}
                age={this.age}
                height={this.height}
                key={this.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
