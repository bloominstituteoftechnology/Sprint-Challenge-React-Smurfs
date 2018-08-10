import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Smurf from './Smurf';
import axios from 'axios';
import SmurfForm from './SmurfForm';
class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(res=>this.setState({smurfs: res.data})).catch(err=>console.log(err));
  }
  render() {
    return (
      <div className="Smurfs">
      <SmurfForm/>
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Link to={`/smurfs/${smurf.id}`} key={smurf.id}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
              />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
