import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";

ReactDOM.render(
  <div>

    <Router>
      <Header />
    </Router>
  </div>,
  document.getElementById("root")
);
