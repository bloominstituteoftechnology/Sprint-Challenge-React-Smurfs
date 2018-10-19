import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import "./App.css";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  render() {
    return (
      <div className="root">
        <Route exact path="/" component={Header} />
        <Route path="/smurfs" component={App} />
      </div>
    );
  }
}

export default Root;
