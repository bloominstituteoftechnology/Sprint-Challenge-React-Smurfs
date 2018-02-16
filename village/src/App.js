import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

class App extends Component {
  state = {
    smurfs: []
  };
  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadFriends} />
        <Smurfs smurfs={this.state.smurfs} />
        <Smurf onDelete={this.removeFriend} />
      </div>
    );
  }

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    Axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(() => {
        console.error("error getting data");
      });
  };

  removeFriend = id => {
  const endpoint = `http://localhost:3333/smurfs/${id}`;
  Axios
    .delete(endpoint)
    .then(response => {
      console.log(response)
    })
    .catch(() => {
      console.error('error deleting');
    });
  };
}

export default App;
