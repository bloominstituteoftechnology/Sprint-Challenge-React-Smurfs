import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import App from "./App";

const WrApp = withRouter(App);
ReactDOM.render(
  <Router>
    <WrApp />
  </Router>,
  document.getElementById("root")
);
