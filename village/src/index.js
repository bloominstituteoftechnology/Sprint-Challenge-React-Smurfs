import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";  //imports BrowserRouter component but renames to "Router" inside of file 

import "./index.css";
import App from "./App";


// 11-13 Wrap app component with the Router component this lets us use react router within our app
ReactDOM.render(
  <Router>       
    <App />
  </Router>,
  document.getElementById("root")
);