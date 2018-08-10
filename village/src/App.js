import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  addSmurf = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        this.setState({
          smurfs: res.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => {
        console.error("Server Post", err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /* Lifecycle methods */

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.error("Server Get", err);
      });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route
          path="/smurfs"
          render={props => (
            <div>
              <SmurfForm
                {...props}
                name={this.state.name}
                age={this.state.age}
                height={this.state.height}
                onChange={this.handleInputChange}
                addSmurf={this.addSmurf}
              />
              <Smurfs {...props} smurfs={this.state.smurfs} />
              <Link to="/">Home</Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
