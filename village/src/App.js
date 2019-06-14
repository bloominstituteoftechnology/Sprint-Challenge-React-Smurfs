import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Form from "./components/SmurfForm";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </Router>
  );
}

export default App;
