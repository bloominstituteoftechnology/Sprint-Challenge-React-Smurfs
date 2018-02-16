import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  state = {
    smurfs: []
  };
  render() {
    return (
      <div className="App">
        <div className="forms">
          <SmurfForm onCreate={this.loadSmurfs} />
        </div>
        <Smurfs
          smurfs={this.state.smurfs}
          onDelete={this.deleteSmurf}
          onUpdate={this.updateSmurf}
        />
      </div>
    );
  }
  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.error("Error Loading Smurfs", error);
      });
  };

  deleteSmurf = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    axios
      .delete(endpoint, smurf)
      .then(response => {
        this.loadSmurfs();
      })
      .catch(error => {
        console.error("Error Deleting Smurf: ", error);
      });
  };

  updateSmurf = smurf => {
    console.log("Update: ", smurf)
    if (!smurf.name || !smurf.height || !smurf.age)
      alert("All Fields Must Be Filled Out!");
    else {
      const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
      axios
        .put(endpoint, smurf)
        .then(response => {
          this.loadSmurfs();
        })
        .catch(error => {
          console.error("Error Updating Smurf: ", error);
        });
    }
  };
}

export default App;
