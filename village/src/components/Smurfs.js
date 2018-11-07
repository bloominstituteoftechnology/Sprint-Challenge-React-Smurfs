import React from 'react';
import Smurf from './Smurf';
import axios from 'axios'

class Smurfs extends React.Component {
 constructor(){
  super()
  this.state = {
   smurfs: []
  }
 }

 componentDidMount(){
  axios
  .get('http://localhost:3333/smurfs')
  .then((result) => {
    console.log('Server Response: ', result)
    this.setState({
      smurfs: result.data
    })
    
  }).catch((err) => {
    console.log(err)
  });
}

delete = (smurfId) => {
    axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then((result) => {
      console.log('Server Response: ', result)
      this.setState({
        smurfs: result.data
      })
      
    }).catch((err) => {
      console.log('Error: ', err)
      
    });
  }
  render(){
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
           return(
             <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={this.delete}
              />
           )
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
