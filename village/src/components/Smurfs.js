import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }


  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  saveNameData = () => {
    const name = { name: this.state.name, age: this.state.age, height: this.state.height };
    axios
      .post(`http://localhost:3333/smurfs`, name)
      .then(savedName => {
        console.log(savedName);
        this.setState({ name: '', age: '', height: '' });
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
