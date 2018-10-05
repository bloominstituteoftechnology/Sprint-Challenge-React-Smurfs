import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
