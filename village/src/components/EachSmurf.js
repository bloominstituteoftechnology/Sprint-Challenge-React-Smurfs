import React, { Component } from 'react';
import axios from 'axios';
import  Smurf from './Smurf';

export default class EachSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    //console.log(id);	  
    this.fetchSmurf(id);
  }

  fetchSmurf = id => {
    axios.get(`http://localhost:3333/smurfs/${id}`)  
      .then(response => {
	console.log("GET RESPONSE: ", response);      
        this.setState(() => ({smurf: response.data}));
      })
      .catch(error => {
        console.error(error);
      });
  };
   
render() {
    if (!this.state.smurf) {
      return <div>Loading ..</div>;
    }

    return (    <div>
                <Smurf name={this.state.smurf.name}
                id={this.state.smurf.id}
                age={this.state.smurf.age}
                height={this.state.smurf.height}
                key={this.state.smurf.id}/>
                </div>
      );
  }
}


