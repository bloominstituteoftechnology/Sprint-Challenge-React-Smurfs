import React, { Component } from 'react';

import axios from 'axios';

import Smurf from './Smurf';

class SmurfList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
    this.getSmurfs = this.getSmurfs.bind(this);
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    const { name, age, height } = this.state;
    const newSmurf = {
      name,
      age,
      height
    };
    axios.post('http://localhost:3333/smurfs', newSmurf )
    .then(response => {
      this.setState({
        name: '',
        age: '',
        height: '',
        smurfs: response.data
      });
    })
    .catch(error => {
      console.log(error);
    })
    console.log(this.state.smurfs);
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
        <div>

        <div className="SmurfForm">
            <form onSubmit={this.addSmurf}>
                <input
                    onChange={this.updateName}
                    placeholder="name"
                    value={this.state.name}
                />
                <input
                    onChange={this.updateAge}
                    placeholder="age"
                    value={this.state.age}
                />
                <input
                    onChange={this.updateHeight}
                    placeholder="height"
                    value={this.state.height}
                />
                <button type="submit">Add to the village</button>
            </form>
        </div>

        <div className="Smurfs">
            <h1>Smurf Village</h1>
            <ul>
                { this.state.smurfs.map((smurf) => {
                    return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
                })}
            </ul>
        </div>
      </div>
    );
  }

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
      .then(response  => {
        this.setState({
          smurfs: response.data
        });
        console.log(this.state.smurfs);
      })
      .catch(error => {
        console.log(`Error getting friends: ${error}`);
      })
  }

  componentDidMount() {
    this.getSmurfs();
  }
}

export default SmurfList;