import React from 'react';
import ReactDOM from 'react-dom';
import  'tachyons';
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(
<Router><App /></Router>, document.getElementById('root'));
