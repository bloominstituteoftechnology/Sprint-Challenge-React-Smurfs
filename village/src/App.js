import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const url = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState({
          smurfs: response.data,
        });
      })
      .catch(response => {
        console.log(`error ${response}`);
      });
  }
  addSmurf = (name, age, height) => {
    axios
      .post(url, { name: name, age: age, height: height })
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(response => {
        console.log(`error ${response}`);
      });
  };

  killSmurf = id => {
    axios.delete(`${url}/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(response => {
        console.log(`error ${response}`);
      });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} killSmurf={this.killSmurf}/>
      </div>
    );
  }
}

export default App;
